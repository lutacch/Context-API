import React from "react";
import initialMovies from "/workspace/Context-API/src/js/component/const/InitialMovies.jsx";
import Movie from "/workspace/Context-API/src/js/component/Movie.jsx";


const MovieList = () => {
    console.log("movie list")
    return (
        <div className="container">
            <div className="row">
                {initialMovies.map(pelicula => ( 
                <div className="col-md-4" key={pelicula.id}>
                   <Movie pelicula={pelicula}/>
                </div>
                ))}
             
               
              
    </div>
        </div>
    )
}

export default MovieList;