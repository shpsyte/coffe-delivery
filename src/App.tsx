import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
