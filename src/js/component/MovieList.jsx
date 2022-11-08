import React, {useContext} from "react";
import Movie from "/workspace/Context-API/src/js/component/Movie.jsx";
import MoviesContext from "/workspace/Context-API/src/js/component/contexts/MoviesContext.js";

const MovieList = () => {

   const { starwars } = useContext(MoviesContext) 


    return (
        <div className="container">
            <div className="row">
                {starwars.map(pelicula => ( 
                <div className="col-md-4" key={pelicula.id}>
                   <Movie pelicula={pelicula}/>
                </div>
                ))}
             
               
              
    </div>
        </div>
    )
}

export default MovieList;