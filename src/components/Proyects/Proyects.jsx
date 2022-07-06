import React, { useEffect, useState } from "react";

const Proyects = () => {
	const [buttonActive, setbuttonActive] = useState(false);

	const [contents, setContent] = useState({
		title: "",
		info: "",
		url: "",
	});

	useEffect(() => {
		handleChangeContent("p1");
	}, []);

	function handleChangeContent(proyect) {
		switch (proyect) {
			case "p1":
				setContent({
					title: "Basic TODO",
					info: `First project done with "useState" and the additional use of "useRef" for the creation of a TODO. 
					It was a simple project where I learned and understood the operation and the way to work with states.`,
					url: "https://p1-fabricio.netlify.app/",
				});
				break;
			case "p2":
				setContent({
					title: "Weather App",
					info: `Second project in which fetch requests were made to a weather API. With this one I further refined the use of states, incorporated the creation of "custom hooks" and the incorporation of environment variables.`,
					url: "https://p2-fabricio.netlify.app/",
				});
				break;
			case "p3":
				setContent({
					title: "PokeSearch",
					info: `Third project in which I continued making fetch requests to an API ("PokeAPI") and made a Pokémon finder. The challenge here was the logic, how to receive information from each pokemon and work it.
					On the other hand, I incorporated the "lazy loading" which is a tool that well used optimizes the application.`,
					url: "https://p3-fabricio.netlify.app/",
				});
				break;
			default:
				setContent({
					title: "What else?",
					info: "Over time I will be adding future projects that I make and/or some modifications.",
					url: "",
				});
				break;
		}
	}

	return (
		<div className="my-6 h-full w-full" id="fourth-part">
			<h2
				className="titleSize font-bold text-center lg:mt-20"
				data-aos="fade-down"
				data-aos-delay="100"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				My proyects
			</h2>

			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6 h-64 my-4">
				{/* Buttons */}
				<nav
					className="flex flex-col max-h-96 overflow-y-auto customScroll border-r border-gray-400/30"
					data-aos="fade-down"
					data-aos-delay="200"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					<Button handleChangeContent={handleChangeContent} value="Proyect 1" proyect="p1" />
					<Button handleChangeContent={handleChangeContent} value="Proyect 2" proyect="p2" />
					<Button handleChangeContent={handleChangeContent} value="Proyect 3" proyect="p3" />
					<Button handleChangeContent={handleChangeContent} value="..." proyect="p4" />
				</nav>

				{/* Contenido */}
				<div
					className={`col-span-2 md:col-span-3 lg:col-span-4 w-full h-full flex flex-col gap-4 justify-between overflow-y-auto customScroll md:px-8`}>
					<span className="text-center">
						<h2
							className="subtitleSize font-bold text-green-500"
							data-aos="fade-down"
							data-aos-delay="200"
							data-aos-duration="500"
							data-aos-easing="ease-in-out">
							{contents.title}
						</h2>
						<p
							className="descriptionSize italic"
							data-aos="fade-down"
							data-aos-delay="350"
							data-aos-duration="500"
							data-aos-easing="ease-in-out">
							{contents.info}
						</p>
					</span>

					{contents.url.length !== 0 && (
						<nav
							className="flex justify-end px-4 py-2"
							data-aos="fade-down"
							data-aos-delay="500"
							data-aos-duration="500"
							data-aos-easing="ease-in-out">
							<a
								href={contents.url || ""}
								className="descriptionSize button"
								target="_blank"
								rel="noreferrer">
								Ver el proyecto
							</a>
						</nav>
					)}
				</div>
			</div>

			<div className="text-center">
				<h2
					className="text-green-500 font-bold subtitleSize"
					data-aos="fade-down"
					data-aos-delay="300"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					Important
				</h2>
				<p
					className="italic descriptionSize"
					data-aos="fade-down"
					data-aos-delay="500"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					With these projects I'm not looking to make a good design, I'm looking to practice my
					logic as well as the "React.JS" tools I can use.
				</p>
			</div>
		</div>
	);
};

function Button({ handleChangeContent, value, proyect }) {
	return (
		<button
			className="descriptionSize pt-2 pb-1 border-b-2 border-gray-500/30 font-semibold hover:bg-black/30 hover:text-white hover:border-white"
			onClick={() => handleChangeContent(proyect)}>
			{value}
		</button>
	);
}

export default Proyects;
