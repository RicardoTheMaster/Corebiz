import React from "react";
import "./Footer.css";
import { ReactComponent as Mail } from "../../utils/icons/mail.svg";
import { ReactComponent as Headset } from "../../utils/icons/headset.svg";
import Core from "../../utils/images/footer/coreFoot.png";
import Vtex from "../../utils/images/footer/vtexFoot.png";

export const Footer = () => {
	
  return (
    <div className="flex w-full align-center contenedorFooter ">
      <div className="responsive">
        <div>
          <p className="ubicacion">Ubicación</p>
          <div className="dividerFooter" />
        </div>
        <p>Avenida Andrómeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.arg</p>
        <p>+55 11 3090 1039</p>
      </div>
      <div className="flex flex-column ">
        <button className="buttonFoot">
          <Mail className="icons" />{" "}
          <label className="text-center w-full">CONTÁCTANOS</label>
        </button>
        <button className="buttonFoot">
          <Headset className="icons" />{" "}
          <label className="text-center w-full">HABLA CON UN CONSULTOR</label>
        </button>
      </div>
      <div className="flex text-light align-end" style={{gap:'5em'}}>
        <div className="flex flex-column " style={{marginRight:'1em'}}>
          <p>Desarrollado por</p>
          <img style={{width:'120px',height:'35px'}} src={Core} alt="corebiz" />
        </div>
        <div className="flex flex-column">
          Powered by
          <img  style={{width:'100px',height:'30px'}} src={Vtex} alt="vtex" />
        </div>
      </div>
    </div>
  );
};
