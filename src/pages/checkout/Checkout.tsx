import { ReactNode } from "react";

interface CheckoutProps {
  children?: ReactNode;
}

export function Checkout({ children }: CheckoutProps) {
  return (
    <>
      <h1>Checkout</h1>
      {children}
    </>
  );
}
