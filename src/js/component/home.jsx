import React from "react";
import { UserProvider } from "/workspace/Context-API/src/js/component/contexts/UserContext.js";
import MovieList from "/workspace/Context-API/src/js/component/MovieList.jsx";
import Navbar from "/workspace/Context-API/src/js/component/Navbar.jsx";


const Home = () => {
	return (
		<div>
			<UserProvider>
				<Navbar/>
				<MovieList/>
			</UserProvider>
		</div>
	);
};

export default Home;
