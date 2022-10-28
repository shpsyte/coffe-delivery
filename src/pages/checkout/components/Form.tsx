import { MapPin } from "phosphor-react";
import { TextInput } from "../../../components/Input";

export function Form() {
  return (
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
  );
}
