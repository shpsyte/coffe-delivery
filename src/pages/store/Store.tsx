import { ReactNode, useState } from "react";
import Hero from "../../assets/hero.svg";
import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Minus,
  Plus,
} from "phosphor-react";
import { CartButton } from "../../components/CartButton";

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

import * as Img from "../../assets/coffess/index";

export function Store() {
  const [products, setProducts] = useState<ProductProps[]>(() => {
    const itens = [
      {
        id: 1,
        img: Img.Expresso,
        tags: ["Tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.9,
      },
      {
        id: 2,
        img: Img.Americano,
        tags: ["Tradicional"],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.9,
      },
      {
        id: 3,
        img: Img.ExpressoCremoso,
        tags: ["Tradicional"],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.9,
      },
      {
        id: 4,
        img: Img.CafeGelado,
        tags: ["Tradicional", "Gelado"],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.9,
      },
      {
        id: 5,
        img: Img.CafeLeite,
        tags: ["Tradicional", "Com Leite"],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.9,
      },
      {
        id: 6,
        img: Img.latte,
        tags: ["Tradicional", "Com Leite"],
        name: "Latte",
        description:
          "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.9,
      },
      {
        id: 7,
        img: Img.Capuccino,
        tags: ["Tradicional", "Com Leite"],
        name: "Capuccino",
        description:
          "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.9,
      },
      {
        id: 8,
        img: Img.Macchiato,
        tags: ["Tradicional", "Com Leite"],
        name: "Macchiato",
        description:
          "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.9,
      },
      {
        id: 9,
        img: Img.Mochaccino,
        tags: ["Tradicional", "Com Leite"],
        name: "Mocaccino",
        description:
          "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.9,
      },
      {
        id: 10,
        img: Img.ChocolateQuente,
        tags: ["Especial", "Com Leite"],
        name: "Chocolate Quente",
        description:
          "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.9,
      },
      {
        id: 11,
        img: Img.Cubano,
        tags: ["Especial", "Gelado", "Alcoolico"],
        name: "Cubano",
        description:
          "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.9,
      },
      {
        id: 12,
        img: Img.Havaiano,
        tags: ["Especial"],
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.9,
      },
      {
        id: 13,
        img: Img.Arabe,
        tags: ["Especial"],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.9,
      },
      {
        id: 14,
        img: Img.Irlandes,
        tags: ["Especial", "Alcoolico"],
        name: "Irlandês",
        description:
          "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.9,
      },
    ] as ProductProps[];

    return itens;
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex-1 bg-background flex flex-col justify-around py-[94px]">
          <div className="flex flex-col ">
            <h1 className="font-body font-extrabold text-5xl leading-[62px] text-base-title ">
              Encontre o café perfeito para qualquer hora do dia
            </h1>

            <span className="font-sans text-xl text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>

          <div className="flex gap-8 ">
            <div className="flex flex-col flex-1 gap-8 justify-between">
              <div className="flex justify-start items-center gap-1">
                <div className="flex items-center justify-center bg-brand-yellow-dark rounded-full p-2">
                  <ShoppingCart
                    weight="fill"
                    size={16}
                    className="text-brand-yellow-light"
                  />
                </div>
                <span className="flex items-center font-sans text-base-text">
                  Compra Simples e segura
                </span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="flex items-center justify-center bg-brand-yellow rounded-full p-2">
                  <Timer
                    weight="fill"
                    size={16}
                    className="text-brand-yellow-light"
                  />
                </div>
                <span className="flex items-center font-sans text-base-text">
                  Entrega rápida e rastreada
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-start items-center gap-1">
                <div className="flex items-center justify-center bg-base-text rounded-full p-2">
                  <Package
                    weight="fill"
                    size={16}
                    className="text-brand-yellow-light"
                  />
                </div>
                <span className="flex items-center font-sans text-base-text">
                  Embalagem mantém o café intacto
                </span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="flex items-center justify-center bg-brand-purple rounded-full p-2">
                  <Coffee
                    weight="fill"
                    size={16}
                    className="text-brand-yellow-light"
                  />
                </div>
                <span className="flex items-center font-sans text-base-text">
                  O café chega fresquinho até você
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background h-[544px] w-[40%] flex items-center justify-center p-5">
          <img src={Hero} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 mb-32">
        {products.map(({ description, id, name, price, img, tags }) => {
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
                  <div className="flex justify-center items-center p-2 gap-2 bg-base-button rounded-md ">
                    <Minus
                      weight="fill"
                      className="text-brand-purple cursor-pointer"
                    />
                    <span className="flex items-center justify-center text-base text-center text-base-title">
                      1
                    </span>
                    <Plus
                      weight="fill"
                      className="text-brand-purple cursor-pointer"
                    />
                  </div>

                  <CartButton className="bg-brand-purple-dark hover:bg-brand-purple transition-colors ease-in-out h-[38px] ">
                    <ShoppingCart
                      size={22}
                      className="text-white"
                      weight="fill"
                    />
                  </CartButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
