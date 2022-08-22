/** 
 * @validateMail
 * validamos que el parametro recivido no sea nulo, undefined, vacio, etc.
 * tambien validamos con un regex que se tenga la estructura común de un
 * correo electronico [usuario][@][dominio][.][extension]
 * */ 
export const validateMail=(mail)=>{
	try {
		let valido=true;
		if(!mail||mail.trim()===''||!RegExp("^[^@]+@[^@]+.[a-zA-Z]{2,}$").test(mail) ){
			return false
		}
		return valido
	} catch (error) {
		console.log('Error validateMail',error)
		return false
	}
}