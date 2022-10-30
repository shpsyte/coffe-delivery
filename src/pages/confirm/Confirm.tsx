import { MapPin, Money, Clock } from "phosphor-react";
import { useContext } from "react";

import Hero from "../../assets/Illustration.png";
import { CartContext } from "../../Context/CartContext";

export function Confirm() {
  const {
    cartAddress: { bairro, cidade, uf, numero, rua, pgto },
  } = useContext(CartContext);
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="w-full flex flex-col justify-center">
          <span className="font-body font-extrabold text-3xl leading-10 text-brand-yellow-dark">
            Uhu! Pedido confirmado
          </span>
          <span className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>
        <div className="flex">
          <div
            className="w-1/2 p-[1px] rounded-md rounded-tr-[36px] rounded-bl-[36px] 
            border-none bg-gradient-to-r from-[#DBAC2C] to-[#8047F8]
            overflow-hidden "
          >
            <div className="w-full h-full flex flex-col p-10 gap-8 bg-background border-none rounded-md rounded-tr-[36px] rounded-bl-[36px] ">
              <div className="flex gap-3">
                <MapPin
                  className="bg-brand-purple text-white p-2 rounded-full"
                  weight="fill"
                  size={36}
                />
                <div className="flex flex-col">
                  <span className="flex items-center self-stretch text-base text-base-subtitle">
                    Entrega em &nbsp;
                    <strong>
                      {rua}, {numero}
                    </strong>
                  </span>
                  <span className="text-sm text-base-text block">
                    {bairro}, {cidade} - {uf}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock
                  className="bg-brand-yellow-light text-white p-2 rounded-full"
                  weight="fill"
                  size={36}
                />
                <div className="flex flex-col">
                  <span className="flex items-center self-stretch text-base text-base-subtitle">
                    Previsão de Entrega
                  </span>
                  <span className="text-sm text-base-text font-bold">
                    20 min - 30 min
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Money
                  className="bg-brand-yellow-dark text-white p-2 rounded-full"
                  weight="fill"
                  size={36}
                />
                <div className="flex flex-col">
                  <span className="flex items-center self-stretch text-base text-base-subtitle">
                    Pagamento na entrega
                  </span>
                  <span className="text-sm text-base-text font-bold">
                    {pgto}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img className="object-fill " src={Hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
