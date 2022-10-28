import { Minus, Plus, Trash } from "phosphor-react";
import { ReactNode } from "react";
import { CartRemoveButton } from "../CartRemoveButton";

interface CartControlProps {
  children?: ReactNode;
}
export function CartControl({ children }: CartControlProps) {
  return (
    <div className="flex gap-1">
      <div className="flex justify-center items-center h-8 p-2 gap-2 bg-base-button rounded-md ">
        <Minus weight="fill" className="text-brand-purple cursor-pointer" />
        <span className="flex items-center justify-center text-base text-center text-base-title">
          1
        </span>
        <Plus weight="fill" className="text-brand-purple cursor-pointer" />
      </div>
      {children}
    </div>
  );
}
