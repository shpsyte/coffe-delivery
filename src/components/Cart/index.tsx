import { Trash } from "phosphor-react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { CartControl } from "../CartControl";
import { CartRemoveButton } from "../CartRemoveButton";
import * as Img from "../../assets/coffess/index";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export function Cart() {
  const { total, cart, removeProduct } = useContext(CartContext);

  const { products = [] } = cart;

  return (
    <>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="flex items-center justify-center gap-2 border-b py-4 border-base-button"
          >
            <img src={Img.Americano} alt="" width="64px" />
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-base-subtitle text-xs flex items-center ">
                  {product.name}
                </span>
                <div className="flex justify-center items-center">
                  <span className="text-base-text text-xs font-bold flex items-center">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <CartControl product={product}>
                <CartRemoveButton
                  className="w-24 h-8"
                  type="button"
                  onClick={() => removeProduct({ ...product, qty: 0 })}
                >
                  <Trash size={16} className="text-brand-purple" />
                  <span className="text-base-text text-xs uppercase font-normal">
                    Remover
                  </span>
                </CartRemoveButton>
              </CartControl>
            </div>
          </div>
        );
      })}

      <div className="flex flex-col gap-3 justify-center items-baseline">
        <div className="w-full flex items-center justify-between text-sm text-base-text">
          <span className="flex items-center justify-center ">
            Total de Itens
          </span>
          <span className="flex items-center justify-center">
            R$ {total.toFixed(2)}
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="flex items-center justify-center text-sm text-base-text">
            Entrega
          </span>
          <span className="flex items-center justify-center text-base">
            R$ 1,70
          </span>
        </div>
        <div className="w-full flex items-center justify-between text-xl text-base-subtitle font-bold">
          <span className="flex items-center justify-center">Total</span>
          <span className="flex items-center justify-center">
            R$ {(1.7 + total).toFixed(2)}
          </span>
        </div>
      </div>
      <Button type="submit">CONFIRMAR PEDIDO</Button>
    </>
  );
}
