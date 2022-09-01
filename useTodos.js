import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// ESTE ES UN CUSTOM HOOK

// // como el estado inicial esta vacio ponemos un arreglo vacio
//     const initialState = [
//         // {
//         //     // para hacer los datos de manera persistente y cuando actualice el navegador no se borren
//         //     // esto se guarda en localStorage del navegador
    
    
    
    
//         //     // // esto es obtener la fecha y el momento actual pero solo los numeros
//         //     // id: new Date().getTime(),
//         //     // description: "Recolectar la piedra del alma",
//         //     // done: false,
//         // },
//         // {
//         //     // // esto es obtener la fecha y el momento actual pero solo los numeros
//         //     // id: new Date().getTime() * 3,
//         //     // description: "Recolectar la piedra del tiempo",
//         //     // done: false,
//         // }
        
//     ]
    // para no perder la informacion del localStorage
    // inicilaizamos nuestro state con los todos que existian en localStorage para no perderlos
    const init = () => {
        // parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.
        // parse esto es lo contrario de stringify
        // || [] significa que si JSON.parse ( localStorage.getItem(" todos") ) es null entoncs va a regresar un arreglo vacio
        return JSON.parse(localStorage.getItem("todos")) || [];
    }    


export const useTodos = () => {

    
    // todoReducer aca no se ejecutan solo le pasamos la refenrecia osea sin los()
    // init inicializa nuestro reducer
    const [todos, dispatch] = useReducer(todoReducer, [], init)

// esto funciona pero abajo esta la mejor solucion
     const todosCount = todos.length;
const pendingTodosCount = todos.filter(todo => !todo.done).length


    // ejecuto algo cuando mi todo cambia cuando esto cambia ejecuto un efecto secundario
    useEffect(() => {
        //   para grabar en el localStorage (pasamos el todos para string xk solo ese tipo de dato se puede grabar en localstorage)
        // stringify() convierte un objeto o valor de JavaScript en una cadena de texto
        localStorage.setItem('todos', JSON.stringify(todos));
        // cuando los todos cambian se vuelve a disparar
    }, [todos])



    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        // para mandar la accion al reducer usando dispatch
        dispatch(action);
    }

    const handleDeleteTodo = (id) => { 
        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        })
    }

// para mostrar el id cuando le doy clic a los numeros
    const handleToggleTodo = (id) => {        
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        })
    }


  return {
   todos,
   //    asi puedo mandar datos en variables y me evito hacer los const de cada uno
   todosCount: todos.length,
   pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
 
}
