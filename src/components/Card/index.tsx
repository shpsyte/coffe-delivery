import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartControl } from "../CartControl";

type Tags =
  | "Tradicional"
  | "Premium"
  | "Especial"
  | "Gelado"
  | "Com Leite"
  | "Alcoolico";

interface ProductProps {
  id: number;
  img: string;
  tags: Tags[];
  name: string;
  description: string;
  price: number;
}

interface CardProps {
  product: ProductProps;
}

export const Card = ({ product }: CardProps) => {
  const { id, img, tags, description, name, price } = product;
  return (
    <div
      key={id}
      className="flex flex-col justify-around bg-base-card rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] 
           max-w-[256px] min-h-[310px]"
    >
      <div className="flex flex-col items-center gap-2 mt-[-50px]">
        <img src={img} alt="Expresso" />
        <div className="flex gap-1">
          {tags.map((tag) => {
            return (
              <span className="bg-brand-yellow-light text-brand-yellow-dark py-1 px-2 flex items-center justify-center uppercase rounded-[100px] font-bold text-2xs ">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h4 className="font-body font-bold text-xl leading-7 flex items-center justify-center text-base-subtitle">
          {name}
        </h4>
        <span className="text-md leading-5 text-center flex items-center justify-center text-base-label ">
          {description}
        </span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-1 text-base-text">
          <span className="leading-[130%] flex items-center justify-center">
            R$
          </span>
          <span className="font-body font-extrabold text-2xl leading-8">
            {price.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 h-hug">
          <CartControl>
            <CartButton className="bg-brand-purple-dark hover:bg-brand-purple transition-colors ease-in-out h-[30px] ">
              <ShoppingCart size={22} className="text-white" weight="fill" />
            </CartButton>
          </CartControl>
        </div>
      </div>
    </div>
  );
};