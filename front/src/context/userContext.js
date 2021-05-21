import { useReducer, createContext } from "react";

export const UserContext = createContext();

const initialState = {
    isLogged: false,
    id: null,
    image_url: null,
    isMod: null,
    email: "",
    firstname: "",
    name: ""
};

/**
 * On définit le comportement notre "reducer".
 */
const userReducer = (state, action) => {
    switch (action.type) {
        case "SETVALUES":
            return {
                isLogged: action.isLogged,
                id: action.id,
                image_url: action.imageUrl,
                isMod: action.isMod,
                email: action.email,
                firstname: action.firstname === null ? '' : action.firstname,
                name: action.name === null ? '' : action.name
            }
        case "RESETVALUES":
            return initialState;

        default: return state;
    }
};

/** 
 * On exporte notre "context".
*/
export const UserContextProvider = props => {
    const [state, dispatch] = useReducer(userReducer, initialState); // On utilise useReducer pour modifier les valeurs initial de "initialState"

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {props.children}
        </UserContext.Provider>
    );
};