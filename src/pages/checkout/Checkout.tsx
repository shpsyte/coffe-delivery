import { ReactNode } from "react";
import { Form } from "./components/Form";
import { Pgto } from "./components/Pgto";
import { Header } from "./components/Header";
import { Cart } from "../../components/Cart";
interface CheckoutProps {
  children?: ReactNode;
}

export function Checkout({ children }: CheckoutProps) {
  return (
    <div className="flex flex-col gap-3">
      <Header />
      <div className="flex-1 flex gap-3 ">
        <div className="w-2/3 flex gap-3 mt-3">
          <div className="flex-1 flex flex-col gap-3 w-2/3">
            <Form />
            <Pgto />
          </div>
        </div>
        <div className="flex-1 flex mt-3">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col gap-6 bg-base-card p-6 justify-center rounded-tl-md rounded-br-md rounded-tr-[44px] rounded-bl-[44px]">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
