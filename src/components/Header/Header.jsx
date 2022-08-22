import React, { useContext } from "react";
import LogoCore from "../../utils/images/header/coreHead.png";
import { ReactComponent as Lupa } from "../../utils/icons/search.svg";
import { ReactComponent as Persona } from "../../utils/icons/person.svg";
import { ReactComponent as Carrito } from "../../utils/icons/cart.svg";
import { ReactComponent as List } from "../../utils/icons/list.svg";
import "../Header/Header.css";
import { Contexto } from "../../App";
import useWindowSize from "../../hooks/useWindowSize";
export const Header = () => {
  /**
   * {carrito}
   * Accedemos a nuestro contexto para obtener los elementos del carrito y asi
   * poder obtener el numero de elementos a mostrar en el icono de nuestro carrito
   * 
   * {widh}
   * Lo usamos para reacomodar el contenido directamente dependiendo de la resolución
   * que se tenga actualmente
   * */
  const { carrito } = useContext(Contexto);
  const { width } = useWindowSize();
  return (
    <header className="flex w-full just-center header ">
      <div className="navbar">
        <div className="just-center align-center pointer lista">
          <List style={{width:'40px',height:'40px'}}/>
        </div>
        <div className="pointer">
          <img src={LogoCore} alt="Logo" className="logo" />
        </div>
        {width > 720 && (
          <div className="flex busqueda align-center">
            <input className="inputHeader" placeholder="¿Qué estás buscando?" />
            <Lupa className="icons pointer" />
          </div>
        )}
        <div className="flex align-center perfil pointer">
          <Persona className="icons" />
          <label>Mi cuenta</label>
        </div>
        <div className="flex text-center just-center align-center pointer">
          <Carrito className="icons" />
          <div className="carrito">
            <p>{carrito.length}</p>
          </div>
        </div>
        
      </div>
      {width <= 720 && (
          <div className="flex busqueda align-center">
            <input className="inputHeader" placeholder="¿Qué estás buscando?" />
            <Lupa className="icons pointer" />
          </div>
        )}
    </header>
  );
};
