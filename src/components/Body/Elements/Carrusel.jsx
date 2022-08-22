import React, { useEffect, useState } from "react";
import Carr1 from "../../../utils/images/body/carousel_1.png";
export const Carrusel = () => {
   /**
   * [seleccionado, setSeleccionado]
   * Hook que controla que imagen se debe de ver en el carrousel donde
   * tenemos 4 imagenes. Donde cada una se encuentra en 100/4=25%. Para monstrar
   * la imagen seleccionada aplazamos el % hacia la izquierda siendo este en negativo
   * 
   */
  const [seleccionado, setSeleccionado] = useState(0);
  return (
    <div
    >
      <div class="carrousel">
        <div
          class="grande"
          style={{
            transform: `translateX(${seleccionado * -25}%)`,
          }}
        >
          <img src={Carr1} alt="Imagen 1" class="img" />
          <img src={Carr1} alt="Imagen 2" class="img" />
          <img src={Carr1} alt="Imagen 3" class="img" />
          <img src={Carr1} alt="Imagen 4" class="img" />
        </div>
        <ul class="puntos">
          <li
            className={`pointer punto ${seleccionado === 0 && "activo"}`}
			onClick={()=>setSeleccionado(0)}
          ></li>
          <li
            className={`pointer punto ${seleccionado === 1 && "activo"}`}
			onClick={()=>setSeleccionado(1)}
          ></li>
          <li
            className={`pointer punto ${seleccionado === 2 && "activo"}`}
			onClick={()=>setSeleccionado(2)}
          ></li>
          <li
            className={`pointer punto ${seleccionado === 3 && "activo"}`}
			onClick={()=>setSeleccionado(3)}
          ></li>
        </ul>
      </div>
    </div>
  );
};
