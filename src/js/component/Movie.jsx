import React, { useContext } from "react";
import UserContext from "/workspace/Context-API/src/js/component/contexts/UserContext.js";



const Movie = ({pelicula}) => {
    const { user, favoriteMovieToUser } = useContext(UserContext)
 
    const imgStyles = {
        height:"300px",
        objectFit: "cover",
    }

    const isFavorite = user?.favoriteMovies?.includes(pelicula.id);

    return (
        <div className="card">
             <img src={pelicula.imageUrl} 
             alt={pelicula.title}
             className="card-img-top"
             style={imgStyles}
             ></img> 
            <div className="card-body">
               <h4>{pelicula.title}</h4>  
                <button className={`btn ${isFavorite ? `btn-warning` : `btn-outline-primary`}`}
                onClick={()=>favoriteMovieToUser(pelicula.id)}
                >
                    Favorito</button>
            </div>
            </div>
    )
}

export default Movie;