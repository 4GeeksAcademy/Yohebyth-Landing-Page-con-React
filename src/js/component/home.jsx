import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron";
import GenericCard from "./genericcard.jsx";
import Footer from "./footer.jsx";

const Home = () => {

	const cardContent = [
		{
			image: "https://www.mejoresfp.com/wp-content/uploads/2023/06/Los-3-mejores-cursos-de-fp-de-inteligencia-artificial-600x381.jpg",
			title: "Inteligencia Artificial Generativa",
			description: "Herramientas como ChatGPT y DALL·E revolucionan la creación de contenidos, desde textos e imágenes hasta tareas automatizadas y creativas."
		},
		{
			image: "https://tn.com.ar/resizer/v2/la-computacion-cuantica-utiliza-qubits-bits-cuanticos-que-pueden-representar-0-1-o-ambos-estados-simultaneamente-gracias-al-principio-de-superposicion-cuantica-imagen-adobestock-FVDW2QIAV5AZLCJLJOENUQJ4P4.png?auth=0a5a37fd84d3fc4daa2e00eec79910a2209845ed969576f4fa11c0456908bb61&width=1440",
			title: "Computación Cuántica",
			description: "Esta tecnología en desarrollo promete resolver problemas complejos rápidamente, transformando industrias como criptografía, química y optimización."
		},
		{
			image: "https://www.iberestudios.com/noticias/wp-content/uploads/2024/05/image-2.png",
			title: "Realidad Extendida (XR)",
			description: "La combinación de AR, VR y MR está transformando la interacción digital en educación, medicina y metaverso."
		},
		{
			image: "https://portalerp.es/images/2024/05/07/ciberseguridad-xiiijpg.jpeg",
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
