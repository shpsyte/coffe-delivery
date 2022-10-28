import { ReactNode } from "react";
import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
  Clock,
} from "phosphor-react";
import { TextInput } from "../../components/Input";
import * as Img from "../../assets/coffess/index";

import { CartButton } from "../../components/CartButton";
import { CartRemoveButton } from "../../components/CartRemoveButton";
import { Button } from "../../components/Button";
interface CheckoutProps {
  children?: ReactNode;
}
import Hero from "../../assets/Illustration.png";

export function Confirm({ children }: CheckoutProps) {
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
            className="w-1/2 flex-col p-[1px] gap-8 border rounded-md rounded-tr-[36px] rounded-bl-[36px] 
            border-none bg-gradient-to-r from-[#DBAC2C] to-[#8047F8]
            overflow-hidden "
          >
            <div className="flex-1 w-full h-full flex flex-col p-10 gap-32 bg-background border-none rounded-md rounded-tr-[36px] rounded-bl-[36px] ">
              <div className="flex gap-3">
                <MapPin
                  className="bg-brand-purple text-white p-2 rounded-full"
                  weight="fill"
                  size={36}
                />
                <div className="flex flex-col">
                  <span className="flex items-center self-stretch text-base text-base-subtitle">
                    Entrega em <b>Rua João Daniel Martinelli, 102</b>
                  </span>
                  <span className="text-sm text-base-text block">
                    Farrapos - Porto Alegre, RS
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
                    Cartão de Crédito
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="object-fill " src={Hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
