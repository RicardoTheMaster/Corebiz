/**
 * 
 * @postNewsLetter
 * Consulta tipo POST aun endpoint que registra un correo y usuario
 * Aqui añadimos configuración ya que estamos trabajando con JSON
 * 
 */
export const postNewsLetter =async(body)=>{
	try {
	   const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify({...body})
	   }
	   let res=await fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter',requestOptions)
	   return res.json()
	} catch (error) {
		console.log(error)
		return {succes:false, message:'Error al consultar postNewLetter api'}
	}
}