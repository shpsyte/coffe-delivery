import { Minus, Plus, Trash } from "phosphor-react";
import { ReactNode, useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartRemoveButton } from "../CartRemoveButton";

interface CartControlProps {
  children?: ReactNode;
  price: number;
  id: number;
}
export function CartControl({ children, id, price }: CartControlProps) {
  const { addProduct } = useContext(CartContext);

  return (
    <></>
    // <div className="flex gap-1">
    //   <div className="flex justify-center items-center h-8 p-2 gap-2 bg-base-button rounded-md ">
    //     <Minus
    //       weight="fill"
    //       className="text-brand-purple cursor-pointer"
    //       onClick={() => {}}
    //     />
    //     <span className="flex items-center justify-center text-base text-center text-base-title">
    //       0
    //     </span>
    //     <Plus
    //       weight="fill"
    //       className="text-brand-purple cursor-pointer"
    //       onClick={() => addProduct({ id, price, qty: 1 })}
    //     />
    //   </div>
    //   {children}
    // </div>
  );
}
