import React, { useContext, useState } from "react";
import { Contexto } from "../../../App";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export const Card = ({ producto, Off }) => {
  /**
   * [showButton, setShowButton]
   * Hook para saber cuando mostrar o no el botón de agregar/eliminar
   * 
   * { carrito, setCarrito }
   * CustomHook para leer la información que hay actualmente en el localStorage
   * con este hook actualizamos la informacion del localStorage
   * 
   * @addItem @delItem
   * Funciones parecidas que interactuan con el localStorage modificando el estado
   * actual y actualizandolo
   * 
   */
  const [showButton, setShowButton] = useState(true);
  const { carrito, setCarrito } = useContext(Contexto);
  
  const addItem = () => {
    try {
      setCarrito([...carrito, producto]);
    } catch (error) {
      console.error("Error addItem", error);
    }
  };
  const delItem = () => {
    try {
      setCarrito(carrito.filter((item)=>item.productId!==producto.productId));
    } catch (error) {
      console.error("Error addItem", error);
    }
  };
  return (
    <div
      style={{
        width: "215px",
        height: "350px",
        marginLeft: "5px",
        marginRight: "5px",
      }}
      key={producto.productId}
      className="flex flex-column card animationCard"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="contenedor">
        <img
          className="imgCard"
          src={producto.imageUrl}
          alt={producto.productName}
        />
        {producto.listPrice && (
          <img
            className="imgCard"
            src={Off}
            alt={producto.productName + "-off"}
          />
        )}
      </div>
      <div className="text-center ">
        <p>{producto.productName}</p>
        <p>
          <label
            className={producto.stars >= 1 ? "estrellaLlena" : "estrellaVacia"}
          >
            ★{" "}
          </label>
          <label
            className={producto.stars >= 2 ? "estrellaLlena" : "estrellaVacia"}
          >
            ★{" "}
          </label>
          <label
            className={producto.stars >= 3 ? "estrellaLlena" : "estrellaVacia"}
          >
            ★{" "}
          </label>
          <label
            className={producto.stars >= 4 ? "estrellaLlena" : "estrellaVacia"}
          >
            ★{" "}
          </label>
          <label
            className={producto.stars >= 5 ? "estrellaLlena" : "estrellaVacia"}
          >
            ★{" "}
          </label>
        </p>
        {producto.listPrice && (
          <p className="subText">
            de $
            {producto.listPrice.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
        )}
        <p className="price">
          por $
          {" " +
            producto.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
        </p>
        {producto.installments.map((parcialidades) => (
          <p className="subText">
            o en {parcialidades.quantity}x R $
            {" " +
              parcialidades.value.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
          </p>
        ))}
        
        {showButton && (
          <button className="buttonCard pointer" onClick={() => addItem()}>
            COMPRAR
          </button>
        )}
        <p></p>
        {(carrito.find((item)=>item.productId===producto.productId)&& showButton) &&
        <button className="buttonCard-delete pointer" onClick={() => delItem()}>
            ELIMINAR
          </button>}
        
      </div>
    </div>
  );
};
