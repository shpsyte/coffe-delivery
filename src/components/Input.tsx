import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
  className?: string;
}

function TextInputRoot({ children, className }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex item-center rounded gap-3 p-3 bg-base-input w-full h-hug focus-within:ring-2",
        className
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: React.ReactNode;
  asChild?: boolean;
}

function TextInputIcon({ children, asChild }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-base-text">{children}</Slot>;
}
function TextInputLabel({ children }: TextInputIconProps) {
  return <Slot className="text-base-text text-left italic ">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <>
      <input
        {...props}
        className="flex w-full items-center gap-1 placeholder:text-sm placeholder:text-base-label bg-base-input 
        focus:outline-none  text-base-text text-sm
        "
      />
    </>
  );
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
  Label: TextInputLabel,
};
