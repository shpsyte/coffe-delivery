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
} from "phosphor-react";
import { TextInput } from "../../components/Input";
import * as Img from "../../assets/coffess/index";

import { CartButton } from "../../components/CartButton";
import { CartRemoveButton } from "../../components/CartRemoveButton";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
interface CheckoutProps {
  children?: ReactNode;
}

export function Checkout({ children }: CheckoutProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex-1 flex gap-3 mt-3 ">
        <span className="w-2/3 font-body font-bold text-lg text-base-subtitle flex items-center justify-start">
          Complete seu pedido
        </span>
        <span className="flex-1 font-body font-bold text-lg text-base-subtitle flex items-center justify-start">
          Cafés selecionados
        </span>
      </div>

      <div className="flex-1 flex gap-3 ">
        <div className="w-2/3 flex gap-3 mt-3">
          <div className="flex-1 flex flex-col gap-3 w-2/3">
            <div className="flex flex-col gap-10 bg-base-card rounded-md p-10 justify-center">
              <div className="flex gap-1">
                <MapPin className="text-brand-yellow" size={22} />
                <div className="flex flex-col">
                  <span className="flex items-center self-stretch text-base text-base-subtitle">
                    Endereço de Entrega
                  </span>
                  <span className="text-sm text-base-text block">
                    Informe o endereço onde deseja receber seu pedido
                  </span>
                </div>
              </div>
              <form className="flex flex-col gap-3">
                <TextInput.Root className="w-1/3">
                  <TextInput.Input type="text" placeholder="CEP" />
                </TextInput.Root>

                <TextInput.Root className="w-1/1">
                  <TextInput.Input type="text" placeholder="Rua" />
                </TextInput.Root>

                <div className="flex gap-2">
                  <TextInput.Root className="w-1/3">
                    <TextInput.Input type="text" placeholder="Rua" />
                  </TextInput.Root>
                  <TextInput.Root className="w-2/3">
                    <TextInput.Input type="text" placeholder="Complemento" />
                    <TextInput.Label>
                      <span className="text-base-label text-xs flex items-center">
                        Opcional
                      </span>
                    </TextInput.Label>
                  </TextInput.Root>
                </div>
                <div className="flex gap-2">
                  <TextInput.Root className="w-1/3">
                    <TextInput.Input type="text" placeholder="Bairro" />
                  </TextInput.Root>
                  <TextInput.Root className="w-1/3 flex-1">
                    <TextInput.Input type="text" placeholder="Cidade" />
                  </TextInput.Root>
                  <TextInput.Root className="w-1/12">
                    <TextInput.Input type="text" placeholder="Uf" />
                  </TextInput.Root>
                </div>
              </form>
            </div>
            <div className="flex flex-col gap-10 bg-base-card rounded-md p-10 justify-center">
              <div className="flex gap-1">
                <CurrencyDollar className="text-brand-purple" size={22} />
                <div className="flex flex-col">
                  <span className="flex items-center self-stretch text-base text-base-subtitle">
                    Pagamento
                  </span>
                  <span className="text-sm text-base-text block">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </div>
              <div className="flex gap-2 justify-between">
                <CartButton className="flex-1 bg-base-button rounded-md p-4 flex gap-1 !justify-start h-hug ">
                  <CreditCard className="text-brand-purple" size={18} />
                  <span className="text-base-text font-normal uppercase flex items-center">
                    Cartao de Crédito
                  </span>
                </CartButton>
                <CartButton className="flex-1 bg-base-button rounded-md p-4 flex gap-2 !justify-start h-hug ">
                  <Bank className="text-brand-purple" size={18} />
                  <span className="text-base-text font-normal uppercase flex items-center">
                    Cartao de Débito
                  </span>
                </CartButton>
                <CartButton className="flex-1 bg-base-button rounded-md p-4 flex gap-2 !justify-start h-hug ">
                  <Money className="text-brand-purple" size={18} />
                  <span className="text-base-text font-normal uppercase flex items-center">
                    Dinheiro
                  </span>
                </CartButton>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex mt-3">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col gap-6 bg-base-card p-6 justify-center rounded-tl-md rounded-br-md rounded-tr-[44px] rounded-bl-[44px]">
              <div className="flex items-center justify-center gap-2 border-b py-4 border-base-button">
                <img src={Img.Americano} alt="" width="64px" />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-base-subtitle text-xs flex items-center ">
                      Expresso Tradicional
                    </span>
                    <div className="flex justify-center items-center">
                      <span className="text-base-text text-xs font-bold flex items-center">
                        R$ 5,00
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex justify-center items-center h-8 p-2 gap-2 bg-base-button rounded-md ">
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
                    <CartRemoveButton className="w-24 h-8">
                      <Trash size={16} className="text-brand-purple" />
                      <span className="text-base-text text-xs uppercase font-normal">
                        Remover
                      </span>
                    </CartRemoveButton>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 border-b py-4 border-base-button">
                <img src={Img.CafeGelado} alt="" width="64px" />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-base-subtitle text-xs flex items-center ">
                      Americano
                    </span>
                    <div className="flex justify-center items-center">
                      <span className="text-base-text text-xs font-bold flex items-center">
                        R$ 8,00
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex justify-center items-center h-8 p-2 gap-2 bg-base-button rounded-md ">
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
                    <CartRemoveButton className="w-24 h-8">
                      <Trash size={16} className="text-brand-purple" />
                      <span className="text-base-text text-xs uppercase font-normal">
                        Remover
                      </span>
                    </CartRemoveButton>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 justify-center items-baseline">
                <div className="w-full flex items-center justify-between text-sm text-base-text">
                  <span className="flex items-center justify-center ">
                    Total de Itens
                  </span>
                  <span className="flex items-center justify-center">
                    R$ 12,00
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
                  <span className="flex items-center justify-center">
                    Total
                  </span>
                  <span className="flex items-center justify-center">
                    R$ 13,70
                  </span>
                </div>
              </div>
              <Button asChild>
                <Link to="/confirm">CONFIRMAR PEDIDO</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
