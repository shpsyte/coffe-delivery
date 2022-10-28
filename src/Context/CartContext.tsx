import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../services/products";

interface Cart {
  id: number;
  products: CartAddproductProps[];
}

interface CartContextType {
  cart: Cart;
  total: number;
  addProduct: (product: CartAddproductProps) => void;
}

interface CartAddproductProps {
  id: number;
  qty: number;
  price: number;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState({
    id: new Date().getTime(),
    products: [],
  } as Cart);

  console.log("my Cart", cart);
  function addProduct(product: CartAddproductProps) {
    console.log("product", product);
    setCart((prev) => {
      return {
        ...prev,
        products: [...cart.products, product],
      };
    });
  }

  function getTotal() {
    let total = 0;
    cart.products.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addProduct,
        total: getTotal(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
