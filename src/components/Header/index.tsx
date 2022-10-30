import Logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { CartButton } from "../CartButton";
import { ShoppingCart, MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export function Header() {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="fixed w-full max-w-6xl">
      <div className="bg-background h-[104px] flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Button className="bg-brand-purple-light flex gap-1  hover:bg-brand-purple-light text-brand-purple-dark ">
            <MapPin className="text-brand-purple-dark" />
            Porto Alegre, RS
          </Button>
          <CartButton className="bg-brand-yellow-light">
            <Link to="/checkout">
              <ShoppingCart
                className="text-brand-yellow-dark"
                size={32}
                weight="fill"
              />
            </Link>
            {totalItems > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-brand-yellow-dark rounded-full w-5 h-5 flex items-center justify-center text-brand-yellow-light">
                {totalItems}
              </span>
            )}
          </CartButton>
        </div>
      </div>
    </div>
  );
}
