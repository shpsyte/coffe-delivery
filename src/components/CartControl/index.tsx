import { Minus, Plus, Trash } from "phosphor-react";
import { ReactNode, useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartRemoveButton } from "../CartRemoveButton";

interface Product {
  id: number;
  qty: number;
}
interface CartControlProps {
  children?: ReactNode;
  product: Product;
}
export function CartControl({
  children,
  product = {
    id: 0,
    qty: 0,
  },
}: CartControlProps) {
  const { updateQty } = useContext(CartContext);

  return (
    <div className="flex gap-1">
      <div className="flex justify-center items-center h-8 p-2 gap-2 bg-base-button rounded-md ">
        <Minus
          weight="fill"
          className="text-brand-purple cursor-pointer"
          onClick={() =>
            updateQty({
              id: product.id,
              qty: product.qty - 1,
            })
          }
        />
        <span className="flex items-center justify-center text-base text-center text-base-title">
          {product.qty}
        </span>
        <Plus
          weight="fill"
          className="text-brand-purple cursor-pointer"
          onClick={() =>
            updateQty({
              id: product.id,
              qty: product.qty + 1,
            })
          }
        />
      </div>
      {children}
    </div>
  );
}
