import React, {useContext}from "react";
import UserContext from "/workspace/Context-API/src/js/component/contexts/UserContext.js";

const Navbar = () => {

   const { user, login, logout } = useContext(UserContext);

    return (
        <nav className="navbar bg-dark text-white">
           <span className="navbar-brand">{user ? `Hola ${user.name}` : "Bienvenido"}</span>
           {user ? 
           <button className="btn btn-primary" 
           onClick={logout}>Cerrar sesion
           </button> : <button className="btn btn-primary" 
           onClick={login}>Iniciar sesion</button> }
          
           
        </nav>
    )
}

export default Navbar;