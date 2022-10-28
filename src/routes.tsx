import { Route, Routes } from "react-router-dom";

import { Store } from "../src/pages/store/Store";
import { Checkout } from "../src/pages/checkout/Checkout";
import { DefaultLayout } from "./Layout";
import { Confirm } from "./pages/confirm/Confirm";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Store />} />
        <Route path="/Home" element={<Store />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>
    </Routes>
  );
}
