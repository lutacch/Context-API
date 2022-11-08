import React, {createContext} from "react";
import initialMovies from "/workspace/Context-API/src/js/component/const/InitialMovies.jsx";

const MoviesContext = createContext();

const MoviesProvider = ({children}) => {

    const data = { starwars : initialMovies }
    return (
        <MoviesContext.Provider value = {data}>
            {children}
        </MoviesContext.Provider>
    )
}

export {MoviesProvider}
export default MoviesContext;