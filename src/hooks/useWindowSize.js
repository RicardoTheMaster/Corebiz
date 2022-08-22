import { useState, useEffect } from "react";
/**
 * @useLocalStorage
 * customHook que tiene la funcionalidad de leer
 * el tamaño actual que tenga la ventana de esta forma
 * la misma información se puede usar en distintas partes en 
 * tiempo real.
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}
