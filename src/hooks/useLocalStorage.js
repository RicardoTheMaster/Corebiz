import { useState } from "react"
/**
 * @useLocalStorage
 * customHook que tiene la funcionalidad de leer/editar
 * el contenido que haya en el localStorage de esta forma
 * la misma información se puede usar en distintas partes en 
 * tiempo real.
 */
export const useLocalStorage=(key,initialValue)=>{
	const [valor, setValor] = useState(()=>{
		try {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) :initialValue
		} catch (error) {
			return initialValue
		}
	})

	const setValorNuevo=(nuevoValor)=>{
		setValor(nuevoValor)
		localStorage.setItem(key, JSON.stringify(nuevoValor))
	}

	return [valor, setValorNuevo]
}