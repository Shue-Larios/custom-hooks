import { useState } from "react";


export const useFrom = ( initialForm = {} ) => {

    const [FromState, setFromState] = useState(initialForm)
    
  
    // para mantener el estado hook
    // estado del formulario (formState)
    // const [formState, setformState] = useState({
    //     // esto es el estado inicial
    //     username: '',
    //     email: '',
    //     password: ""
    // })

    // funcion que nos permtie hacer el cambio de cualquier input
    const onInputChange = ({target}) => {
        // event.target.value para ver el valor nuevo escrito
        // event.target.name para ver que elemento esta cambiando 

        const { name, value } = target;
        // hacemos el cambio con llaves xk arriba tenemos como objeto
        setFromState({
            // desestructuramos el formState para mantener todos los valores dl formulario
            ...FromState,
            [ name ]: value
        });
    }


    // funcion para limpiar los campos
    const onResetForm = () =>{
      setFromState (initialForm );

  }


  return {
    ...FromState,
    onInputChange,
    onResetForm
  }
}
