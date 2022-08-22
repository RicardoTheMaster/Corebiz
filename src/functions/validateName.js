/** 
 * @validateName
 * validamos que el parametro recivido no sea nulo, undefined, vacio, etc.
 * tambien validamos con un regex que se tenga la estructura común de un
 * nombre desde los comunes [Ricardo] hasta mas complejos [Jérémie O'Co-nor]
 * */ 
export const validateName = (name) => {
  try {
    let valido = true;
    if (
      !name ||
      name.trim() === "" ||
      !RegExp("^([ \u00c0-\u01ffa-zA-Z'-])+$").test(name)
    ) {
      return false;
    }
    return valido;
  } catch (error) {
    console.log("Error validateName", error);
    return false;
  }
};
