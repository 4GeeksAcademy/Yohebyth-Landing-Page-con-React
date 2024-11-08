import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron";
import GenericCard from "./genericcard.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar/>
			<Jumbotron/>			
			<GenericCard/>
		</div>
	);
};

export default Home;
