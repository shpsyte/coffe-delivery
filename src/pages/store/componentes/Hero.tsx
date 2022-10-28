import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import HeroImg from "../../../assets/hero.svg";

export function Hero() {
  return (
    <div className="flex justify-between">
      <div className="flex-1 bg-background flex flex-col justify-around py-[94px]">
        <div className="flex flex-col ">
          <h1 className="font-body font-extrabold text-5xl leading-[62px] text-base-title ">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <span className="font-sans text-xl text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
}
