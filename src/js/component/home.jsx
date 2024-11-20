import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron";
import GenericCard from "./genericcard.jsx";
import Footer from "./footer.jsx";

const Home = () => {

	const cardContent = [
		{
			image: "image1",
			title: "titulo1",
			description: "description1"
		},
		{
			image: "image2",
			title: "titulo2",
			description: "description2"
		},
		{
			image: "image3",
			title: "titulo3",
			description: "description3"
		},
		{
			image: "image4",
			title: "titulo4",
			description: "description4"
		}
	];

	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-sm-4">
					{cardContent.map((cardContentParam, index) => (
						<GenericCard
							key={index}
							image={cardContentParam.image}
							title={cardContentParam.title}
							description={cardContentParam.description}
						/>
					))}

				</div>				
			</div>
			<Footer />
		</>
	);
};

export default Home;
