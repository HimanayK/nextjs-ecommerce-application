"use client";
import React from 'react';
import { ClerkLoaded, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Form from "next/form"; 
import { PackageIcon, TrolleyIcon } from '@sanity/icons';
import { useBasketStore } from '@/store/store';

const Header = () => {
    const { user } = useUser(); //Get the user object from Clerk
    const itemCount = useBasketStore((state) =>
      state.items.reduce((total, item) => total + item.quantity,0))
    
    const createClerkPasskey = async () => {
      try {
        const response = await user?.createPasskey();
        console.log("Passkey created", response)
      } catch (error) {
        console.log("Error creating passkey", error)
      }

    }
  return (
    <div className='flex flex-wrap justify-between items-center px-4 py-2'>
        <div className='flex w-full flex-wrap justify-between item-center'>
            <Link 
              href="/" 
              className='text-2xl font-bold text-blue-500 hover:opacity-45 cursor-pointer mx-auto sm:mx-0'>
            Shopper
            </Link>
            <Form
              action="/search"
              className='w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0'
            >
             <input 
              type="text" 
              name="query" //Name the input field to match the expected query parameter
              placeholder='Search for products'
              className='bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl'
            />
            </Form>
            <div className='flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none'>
              <Link
                href="/basket" 
                className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                <TrolleyIcon className="w-6 h-6" />
                {/* item count should be dynamic */}
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>{itemCount}</span>
                <span>My Basket</span>
              </Link>
                {/* user icon */}
                <ClerkLoaded>
                  {/* If the user exists, my orders link should be shown */}
                  {user && (
                    <Link
                    href="/orders"
                    className='relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-full'
                    >
                      <PackageIcon className='"w-6 h-6' />
                      My Orders</Link>
                  )}
                  {/* If the user does not exists, show the sign in button */}
                  {user ? (
                    <div className='flex items-center space-x-2'>
                      <UserButton/>
                      <div className='hidden sm:block text-xs'>
                        <p className='text-gray-400'>Welcome Back</p>
                        <p className='font-bold'>{user.fullName}</p>
                      </div>
                    </div>
                  ) : (
                  <SignInButton mode="modal" />
                )}
                {/* PassKey logic goes here */}
                {user ?.passkeys.length === 0 && (
                  <button onClick={createClerkPasskey}
                  className='bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border border-blue-500'>
                    Create Passkey
                  </button>
                )}
                </ClerkLoaded>
            </div>
        </div>
    </div>
  )
}

export default Header