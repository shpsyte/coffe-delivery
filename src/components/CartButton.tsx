import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function CartButton({
  children,
  asChild,
  className,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        {...rest}
        className={clsx(
          "relative flex items-center justify-center h-hug p-4 rounded-md font-bold text-sm leading-5 text-white focus:outline-none focus:ring-2 focus:ring-brand-brand-purple transition-colors",
          className
        )}
      >
        {children}
      </Comp>
    </>
  );
}
