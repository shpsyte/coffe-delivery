import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        {...rest}
        className={clsx(
          "flex items-center justify-center px-2 py-3 w-full h-[38px] bg-brand-yellow rounded-md font-bold text-sm leading-5 text-white hover:bg-brand-yellow-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow-dark transition-colors",
          className
        )}
      >
        {children}
      </Comp>
    </>
  );
}
