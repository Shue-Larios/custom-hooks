
import { useState } from "react"
// creamos nuestro propio customhook
// como buena practica poner use antes dl nombre asi identifican q es un hook
// asi podemos decir q el valor inicial es ese
export const useCounter = ( initialValue = 1 ) =>{

 const [Counter, setCounter] = useState(initialValue)

//  yo tengo que proporcionar como quiero q este hook sea editado para hacer eso

const increment = ( value = 1) =>{
    setCounter (Counter + value )
}

const reset = () =>{
    setCounter ( initialValue )
}

const decrement = (value = 1) =>{

  if (Counter === 0) return // esta linea seria la parte del si (si esto es igual a 1 q me retorne sino)
  setCounter (Counter - value ); // aca seria la parte dl else
}


    return{
        Counter,
        // aca estoy llamando la funcion y por ende tambien se esta retornando
        increment,
        reset,
        decrement,

    }
}

