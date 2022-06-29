import React, { useEffect, useState } from "react";

const Desktop = () => {
	// ! -------------------------------------------------------------------
	// * Hecho para retornar la posición del scroll
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	// ! -------------------------------------------------------------------

	return (
		<div
			className={`hidden lg:flex fixed w-full z-50 max-w-6xl top-0 left-auto border-b-2 border-black shadow-sm shadow-black h-20 backdrop-blur-sm rounded-b-3xl lg:justify-center lg:items-center transition-opacity duration-300 hover:opacity-100 ${
				scrollPosition > 100 ? "opacity-30" : "opacity-100"
			}`}>
			<a
				href="#first-part"
				className="lg:font-bold lg:descriptionSize lg:border-b lg:mx-4 hover:text-white hover:border-white">
				Me
			</a>
			<a
				href="#second-part"
				className="lg:font-bold lg:descriptionSize lg:border-b lg:mx-4 hover:text-white hover:border-white">
				About me
			</a>
			<a
				href="#third-part"
				className="lg:font-bold lg:descriptionSize lg:border-b lg:mx-4 hover:text-white hover:border-white">
				Skills
			</a>
			<a
				href="#fourth-part"
				className="lg:font-bold lg:descriptionSize lg:border-b lg:mx-4 hover:text-white hover:border-white">
				Proyects
			</a>
		</div>
	);
};

export default Desktop;
