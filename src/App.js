import { createContext } from "react";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
export const Contexto = createContext({ carrito: [], setCarrito: () => {} });

function App() {
  const [carrito, setCarrito] = useLocalStorage("car", []);
  return (
    <Contexto.Provider
      value={{
        carrito,
        setCarrito,
      }}
    >
      <Header />
      <Body />
      <Footer />
    </Contexto.Provider>
  );
}

export default App;
