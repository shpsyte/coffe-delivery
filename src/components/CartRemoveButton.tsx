import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function CartRemoveButton({
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
          "flex items-center gap-1 justify-center w-[150px] h-[38px] px-2 bg-base-button rounded-md font-bold text-sm leading-5 text-base-text hover:bg-base-hover focus:outline-none focus:ring-2 focus:ring-brand-brand-purple transition-colors",
          className
        )}
      >
        {children}
      </Comp>
    </>
  );
}
