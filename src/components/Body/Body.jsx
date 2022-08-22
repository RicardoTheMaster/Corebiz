import React from "react";
import { Carrusel } from "./Elements/Carrusel";
import "./Body.css";
import { Articulos } from "./Elements/Articulos";
import { Boletin } from "./Elements/Boletin";
export const Body = () => {
  return (
    <div>
      <Carrusel />
      <Articulos />
      <Boletin />
    </div>
  );
};
