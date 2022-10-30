import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { CartButton } from "../../../components/CartButton";

export function Pgto() {
  const { register, setValue } = useFormContext();

  const pgto = register("pgto");

  return (
    <div className="flex flex-col gap-10 bg-base-card rounded-md p-10 justify-center">
      <div className="flex gap-1">
        <CurrencyDollar className="text-brand-purple" size={22} />
        <div className="flex flex-col">
          <span className="flex items-center self-stretch text-base text-base-subtitle">
            Pagamento
          </span>
          <span className="text-sm text-base-text block">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        <CartButton
          type="button"
          onClick={() => {
            setValue("pgto", "CARTÃO DE CRÉDITO");
          }}
          className="flex-1 bg-base-button rounded-md p-4 flex gap-1 !justify-start h-hug "
        >
          <CreditCard className="text-brand-purple" size={18} />
          <span className="text-base-text font-normal uppercase flex items-center">
            Cartao de Crédito
          </span>
        </CartButton>
        <CartButton
          onClick={() => {
            setValue("pgto", "CARTÃO DE DÉBITO");
          }}
          type="button"
          className="flex-1 bg-base-button rounded-md p-4 flex gap-2 !justify-start h-hug "
        >
          <Bank className="text-brand-purple" size={18} />
          <span className="text-base-text font-normal uppercase flex items-center">
            Cartao de Débito
          </span>
        </CartButton>
        <CartButton
          onClick={() => {
            setValue("pgto", "DINHEIRO");
          }}
          type="button"
          className="flex-1 bg-base-button rounded-md p-4 flex gap-2 !justify-start h-hug "
        >
          <Money className="text-brand-purple" size={18} />
          <span className="text-base-text font-normal uppercase flex items-center">
            Dinheiro
          </span>
        </CartButton>
      </div>
    </div>
  );
}
