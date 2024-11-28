import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron";
import GenericCard from "./genericcard.jsx";
import Footer from "./footer.jsx";

const Home = () => {

	const cardContent = [
		{
			image: "rigoImage",
			title: "Inteligencia Artificial Generativa",
			description: "Herramientas como ChatGPT y DALL·E revolucionan la creación de contenidos, desde textos e imágenes hasta tareas automatizadas y creativas."
		},
		{
			image: "image2",
			title: "Computación Cuántica",
			description: "Esta tecnología en desarrollo promete resolver problemas complejos rápidamente, transformando industrias como criptografía, química y optimización."
		},
		{
			image: "image3",
			title: "Realidad Extendida (XR)",
			description: "La combinación de AR, VR y MR está transformando la interacción digital en educación, medicina y metaverso."
		},
		{
			image: "image4",
			title: "Ciberseguridad y Privacidad Digital",
			description: "La ciberseguridad, prioritaria debido a la digitalización, incluye innovaciones en protección de datos, detección de amenazas con IA y privacidad"
		}
	];

	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2">
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
