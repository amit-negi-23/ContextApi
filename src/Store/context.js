import { createContext, useReducer } from "react";


const AppContext = createContext()

const initialState = {
    users: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload.newUser] };

        case 'REMOVE_USER':
            return { ...state, users: state.users.filter((user) => user.id !== action.payload.id) };

        default:
            return state;
    }
}


function AppProvider({ children }) {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ store, dispatch }}>{children}</AppContext.Provider>
    )
}


export { AppProvider, AppContext }