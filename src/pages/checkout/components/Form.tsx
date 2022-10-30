import { MapPin } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { TextInput } from "../../../components/Input";

export function Form() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
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
      <TextInput.Root className="w-1/3" isValid={errors.cep ? false : true}>
        <TextInput.Input type="text" {...register("cep")} placeholder="CEP" />
      </TextInput.Root>
      <TextInput.Root className="w-1/1" isValid={errors.rua ? false : true}>
        <TextInput.Input type="text" placeholder="Rua" {...register("rua")} />
      </TextInput.Root>

      <div className="flex gap-2">
        <TextInput.Root
          className="w-1/3"
          isValid={errors.numero ? false : true}
        >
          <TextInput.Input
            type="text"
            placeholder="Numero"
            {...register("numero")}
          />
        </TextInput.Root>
        <TextInput.Root className="w-2/3">
          <TextInput.Input
            type="text"
            placeholder="Complemento"
            {...register("complemento")}
          />
          <TextInput.Label>
            <span className="text-base-label text-xs flex items-center">
              Opcional
            </span>
          </TextInput.Label>
        </TextInput.Root>
      </div>
      <div className="flex gap-2">
        <TextInput.Root
          className="w-1/3"
          isValid={errors.bairro ? false : true}
        >
          <TextInput.Input
            type="text"
            placeholder="Bairro"
            {...register("bairro")}
          />
        </TextInput.Root>
        <TextInput.Root
          className="w-1/3 flex-1"
          isValid={errors.cidade ? false : true}
        >
          <TextInput.Input
            type="text"
            placeholder="Cidade"
            {...register("cidade")}
          />
        </TextInput.Root>
        <TextInput.Root className="w-1/12" isValid={errors.uf ? false : true}>
          <TextInput.Input type="text" placeholder="Uf" {...register("uf")} />
        </TextInput.Root>
      </div>
    </>
  );
}
