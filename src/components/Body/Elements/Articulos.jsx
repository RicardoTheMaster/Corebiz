import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { ReactComponent as Left } from "../../../utils/icons/chevron-left.svg";
import { ReactComponent as Rigth } from "../../../utils/icons/chevron-right.svg";
import Off from "../../../utils/images/body/price-off.png";
import { getProducts } from "../../../apis/getProducts";
import useWindowSize from "../../../hooks/useWindowSize";

export const Articulos = () => {
  /**
   * [step, setStep]
   * Nos indica que en que paso estamos actualmente, inicia desde 1
   * para que los calculos para obtener a los elementos funcionen de manera correcta
   * 
   * [elementsForWidth, setElementsForWidth]
   * Son los elementos que podemos observar dependiendo del ancho que tenga la pantalla
   * siendo 4 el maximo y 1 el minimo
   * 
   * [consulta, setConsulta]
   * Guarda el resultado de la peticion que se hace al Back, inicializamos en []
   * para que antes y durante el tiempo de ejecución de la consulta no haya problemas
   * 
   * { width } 
   * Obtenemos el ancho de la vista que actualemente esta activa
   * 
   * @getProductos
   * Funcion que se encarga de realizar la peticion al back. Donde en caso de falla se
   * regresa el Hook [consulta, setConsulta] a su estado inicial.
   * 
   */
  const [step, setStep] = useState(1);
  const [elementsForWidth, setElementsForWidth] = useState(4)
  const [consulta, setConsulta] = useState([]);
  const { width } = useWindowSize();

  const getProductos = async () => {
    try {
      let res = await getProducts();
      if (Array.isArray(res)) {
        setConsulta(res);
      }else{
        setConsulta([])
      }
    } catch (error) {
      setConsulta([])
      console.log("Error getProductos", error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);
  
  useEffect(() => {
    if(width<=530){
      setElementsForWidth(1)
    }else if(width<975 && width>530){
      setElementsForWidth(2)
    }else{
      setElementsForWidth(4)
    }
  }, [width])
  
  return (
    <div
      className=" w-full flex just-center"
      style={{ paddingTop: "2em", paddingBottom: "4em" }}
    >
      <div className=" flex flex-column ">
        <div className="bolder size-18 w-fit vendidos">
          Más Vendidos
          <div className="divider" />
        </div>
        <div className="flex align-center">
          {consulta.length > 0 && (
            <>
              <Left
                className="chevron pointer"
                onClick={() => step !== 1 && setStep(step - 1)}
              />
              {consulta.slice((step - 1) * elementsForWidth, step * elementsForWidth).map((producto) => (
                <Card producto={producto} Off={Off} />
              ))}
              <Rigth
                className="chevron pointer"
                onClick={() =>
                  consulta.slice(step * elementsForWidth, (step + 1) * elementsForWidth).length > 0 &&
                  setStep(step + 1)
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
