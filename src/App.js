// ! AOS Library
import Aos from "aos";
import "aos/dist/aos.css";

// ! Hooks
import { useEffect } from "react";

// ! Components
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/AboutMe/Skills";
import FooterComp from "./components/Footer/FooterComp";
import Hero from "./components/Hero";
import Desktop from "./components/NavBar/DesktopNB";
import Mobile from "./components/NavBar/MobileNB";
import Proyects from "./components/Proyects/Proyects";

function App() {
	useEffect(() => {
		Aos.init({ once: true, disable: "mobile" });
	}, []);

	return (
		<div className="bg-principalBackground bg-fixed bg-cover bg-center w-full min-h-screen h-full">
			<div className="min-h-screen h-full w-full max-w-6xl mx-auto bg-gradient-to-l from-transparent via-black/50 to-transparent">
				{/* Incorporación del navbar, mobile y desktop */}
				<nav>
					<Mobile />
					<Desktop />
				</nav>

				{/* Primera vista */}
				<Hero />

				{/* Segunda vista */}
				<AboutMe />

				{/* Skills */}
				<Skills />

				{/* Proyects */}
				<Proyects />

				{/* Footer */}
				<FooterComp />
			</div>
		</div>
	);
}

export default App;
