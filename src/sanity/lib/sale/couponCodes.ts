export const COUPON_CODES = {
    BFRIDAY: "BFRIDAY",
    NEWYEAR: "NEWYEAR",
    SUMMER: "SUMMER"
    // Add more coupon codes as needed
} as const;

export type CouponCode = keyof typeof COUPON_CODES;


