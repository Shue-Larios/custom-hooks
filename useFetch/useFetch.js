// link de la api: https://www.breakingbadapi.com/api/quotes/1 

import { useEffect, useState } from "react"

// lo q esta adentro del parentecis es lo q pido espero q me manden
export const useFetch = (url) => {

    const [State, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async () => {
setState({
    ...State,
    isLoading: true,

})

        // mando a llamar el fecth con el parametro q stoy pidiendo como argumento
        // y almaceno la respuesta en una variable
        const resp = await fetch(url);
        const data = await resp.json();
        
        // si todo sale bien mando a llamar al setState
        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }



    useEffect(() => {
        getFetch();
        //   aca le digo q cada q la url cambie q dispare el useEffect sino no hace nada
    }, [url])



    return {
State,

        // data: State.data,  
        // isLoading: State.isLoading,
        // hasError: State.hasError
    }
}
