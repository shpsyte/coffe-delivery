import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex item-center rounded gap-3 py-3 px-3 bg-base-input w-full focus-within:ring-2 ">
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

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <>
      <input
        {...props}
        className="bg-base-input  flex-1 text-base-text outline-none text-sm placeholder:text-base-text"
      />
    </>
  );
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
