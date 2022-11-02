import React from "react";


const Movie = ({pelicula}) => {
    console.log("movie")
    const imgStyles = {
        height:"300px",
        objectFit: "cover",
    }

    const isFavorite = false;

    return (
        <div className="card">
             <img src={pelicula.imageUrl} 
             alt={pelicula.title}
             className="card-img-top"
             style={imgStyles}
             ></img> 
            <div className="card-body">
               <h4>{pelicula.title}</h4>  
                <button className={`btn ${isFavorite ? `btn-warning` : `btn-outline-primary`}`}>Favorito</button>
            </div>
            <h1>Movies</h1>
            </div>
    )
}

export default Movie;