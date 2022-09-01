export const todoReducer = (initialSate = [], action) => {

    // un ciclo switch
    switch (action.type) {
        case '[TODO] Add todo':
            return [...initialSate, action.payload];
        case '[TODO] Remove todo':
            // filter me manda un nuevo arreglo x eso lo podemos usar 
            return initialSate.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle todo':
            // filter me manda un nuevo arreglo x eso lo podemos usar 
            // map es un metodo que tiene javascript para transformar un arreglo en otra cosa
            return initialSate.map(todo => {
                // preguntamos
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        // esto quiere decir lo contrario q tenga el todo en su espacio done
                        done: !todo.done
                    }
                }
                return todo;
            });

        default:
            return initialSate;
    }
}