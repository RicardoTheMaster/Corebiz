/**
 * 
 * @getProducts
 * Consulta sencilla a un endpoint. No hace falta añadir configuracion ya que
 * con la configuración predeterminada funciona correctamente.
 * 
 */
export const getProducts =async()=>{
	try {
		let res=await fetch('https://corebiz-test.herokuapp.com/api/v1/products')
		return res.json()
	} catch (error) {
		console.error('Error api getProducts',error)
		return {success:false,message:'Ha ocurrido error al obtener los productos'}
	}
}