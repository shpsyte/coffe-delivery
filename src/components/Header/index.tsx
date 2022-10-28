import Logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { CartButton } from "../CartButton";
import { ShoppingCart, MapPin } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="w-full bg-background h-[104px] flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="flex items-center justify-center gap-2">
        <Button className="bg-brand-purple-light flex gap-1  hover:bg-brand-purple-light text-brand-purple-dark ">
          <MapPin className="text-brand-purple-dark" />
          Porto Alegre, RS
        </Button>
        <CartButton className="bg-brand-yellow-light">
          <ShoppingCart
            className="text-brand-yellow-dark"
            size={32}
            weight="fill"
          />
        </CartButton>
      </div>
    </div>
  );
}
