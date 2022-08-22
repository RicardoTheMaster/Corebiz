import React, { useState } from "react";
import { postNewsLetter } from "../../../apis/postNewsLetter";
import { validateMail } from "../../../functions/validateMail";
import { validateName } from "../../../functions/validateName";

export const Boletin = () => {
 /**
   * [values, setValues]
   * Hook para los valores actuales de los inputs
   * 
   * @handleSubscribe
   * Funcion que ejecuta peticion al back para dar de alta los datos ingresados
   * validando que los datos introducidos sean validos.
   * 
   */
  const [values, setValues] = useState({ name: null, email: null });

  const handleSubscribe = async () => {
    try {
      if (validateMail(values.email)&&validateName(values.name)) {
        let res = await postNewsLetter(values);
        if(res){
          alert(res.message)
          setValues({ name: null, email: null })
        }else{
          alert('Datos no válidos.')
        }
        console.log(res);
      }else{
        alert('Datos no válidos.')
      }
    } catch (error) {
      console.error("handleSubscribe", error);
    }
  };

  return (
    <div className="flex flex-column w-full just-center align-center contenedorBoletin">
      <p className="mb-1 textBoletin">
        ¡Únete a nuestras novedades y promociones!
      </p>
      <div className="flex w-full just-center boletinRes">
        <input
          className="inputBoletin"
          placeholder="Ingresa tu nombre"
          value={values.name}
          onChange={(e) => {
            setValues({ ...values, name: e.target.value });
          }}
        />
        <input
          className="inputBoletin"
          placeholder="Ingresa tu mail"
          value={values.email}
          onChange={(e) => {
            setValues({ ...values, email: e.target.value });
          }}
        />
        <button
          className="buttonBoletin pointer"
          onClick={() => handleSubscribe()}
        >
          {" "}
          Suscribirme
        </button>
      </div>
    </div>
  );
};
