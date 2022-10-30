import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../services/products";

interface Cart {
  id: number;
  products: CartAddproductProps[];
}

interface CartAddress {
  cep: string;
  rua: string;
  complemento: string | undefined;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  pgto: string;
}

interface CartContextType {
  cart: Cart;
  cartAddress: CartAddress;
  total: number;
  totalItems: number;
  addProduct: (product: CartAddproductProps) => void;
  removeProduct: (product: CartAddproductProps) => void;
  onSetCartAddress: (CartAddress: CartAddress) => void;
  updateQty: (product: CartUpdateProduct) => void;
}

interface CartAddproductProps {
  id: number;
  img: string;
  tags: string[];
  name: string;
  description: string;
  qty: number;
  price: number;
}

interface CartUpdateProduct {
  id: number;
  qty: number;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartAddress, setCartAddress] = useState<CartAddress>({
    cep: "",
    rua: "",
    complemento: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    pgto: "CARTÃO DE CRÉDITO",
  } as CartAddress);
  const [cart, setCart] = useState({
    id: new Date().getTime(),
    products: [],
  } as Cart);

  function updateQty(product: CartUpdateProduct) {
    const { products } = cart;
    const productIndex = products.findIndex((p) => p.id === product.id);

    if (productIndex >= 0) {
      if (product.qty === 0) {
        products.splice(productIndex, 1);
      } else {
        products[productIndex].qty = product.qty;
      }
    }
    setCart({ ...cart, products });
  }

  function addProduct(product: CartAddproductProps) {
    if (product.qty === 0) {
      return;
    }
    // if the product is already in the cart, just update the qty
    const productInCart = cart.products.find((p) => p.id === product.id);
    if (productInCart) {
      setCart((prev) => {
        return {
          ...prev,
          products: prev.products.map((p) => {
            if (p.id === product.id) {
              return {
                ...p,
                qty: p.qty + product.qty,
              };
            }
            return p;
          }),
        };
      });
    } else {
      // if the product is not in the cart, add it
      setCart({
        ...cart,
        products: [...cart.products, product],
      });
    }
  }

  function removeProduct(product: CartAddproductProps) {
    if (product.qty === 0) {
      setCart((prev) => {
        return {
          ...prev,
          products: prev.products.filter((p) => p.id !== product.id),
        };
      });
    }
    // if the product is already in the cart, just update the qty
    const productInCart = cart.products.find((p) => p.id === product.id);
    if (productInCart) {
      setCart((prev) => {
        return {
          ...prev,
          products: prev.products.map((p) => {
            if (p.id === product.id) {
              const newQty = p.qty - product.qty;

              if (newQty <= 0) {
                return {
                  ...p,
                  qty: 0,
                };
              } else {
                return {
                  ...p,
                  qty: newQty,
                };
              }
            }
            return p;
          }),
        };
      });
    }
  }

  function getTotalItems() {
    return cart.products.reduce((acc, product) => {
      return acc + product.qty;
    }, 0);
  }

  function getTotal() {
    let total = 0;
    cart.products.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  }

  function onSetCartAddress(address: CartAddress) {
    setCartAddress(address);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAddress,
        totalItems: getTotalItems(),
        total: getTotal(),
        addProduct,
        removeProduct,
        onSetCartAddress,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
