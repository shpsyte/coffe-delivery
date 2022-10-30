import { Form } from "./components/Form";
import { Pgto } from "./components/Pgto";
import { Header } from "./components/Header";
import { Cart } from "../../components/Cart";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    cep: yup.string().required(),
    rua: yup.string().required(),
    complemento: yup.string(),
    numero: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    uf: yup.string().required(),
    pgto: yup.string().required(),
  })
  .required();

type FormData = ReturnType<typeof schema.validateSync>;

export function Checkout() {
  const navigate = useNavigate();
  const newForm = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      cep: "",
      rua: "",
      complemento: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
      pgto: "CARTÃO DE CRÉDITO",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = newForm;

  const { onSetCartAddress } = useContext(CartContext);

  const onFormSubmit = (form: FormData) => {
    onSetCartAddress(form);
    navigate("/confirm");
  };

  return (
    <div className="flex flex-col gap-3">
      <Header />
      <FormProvider {...newForm}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex-1 flex gap-3 ">
            <div className="w-2/3 flex gap-3 mt-3">
              <div className="flex-1 flex flex-col gap-3 w-2/3 py-7">
                <div className="flex flex-col gap-10 bg-base-card rounded-md p-10 justify-center">
                  <div className="flex flex-col gap-3">
                    <Form />
                  </div>
                </div>
                <Pgto />
              </div>
            </div>
            <div className="flex-1 flex mt-3">
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex flex-col gap-6 bg-base-card p-6 justify-center rounded-tl-md rounded-br-md rounded-tr-[44px] rounded-bl-[44px] py-12">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
