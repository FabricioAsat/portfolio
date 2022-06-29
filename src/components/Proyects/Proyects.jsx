import React, { useState } from "react";

const Proyects = () => {
	const [contents, setContent] = useState({
		title: "Select a Proyect",
		info: "Aquí irá la información de cada proyecto, como también un link hacia su netlify",
	});

	function handleChangeContent(proyect) {
		switch (proyect) {
			case "p1":
				break;

			default:
				break;
		}
	}

	return (
		<div className="my-6 h-full w-full" id="fourth-part">
			<h2 className="titleSize font-bold text-center lg:mt-20">My proyects (En desarrollo)</h2>

			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
				{/* Buttons */}
				<nav className="flex flex-col max-h-96 overflow-y-auto customScroll">
					<button className="descriptionSize pt-2 pb-1 mt-1 border-b-2 border-gray-500/30 font-semibold hover:bg-black/30 hover:text-white hover:border-white">
						Proyect 1
					</button>

					<button className="descriptionSize pt-2 pb-1 mt-1 border-b-2 border-gray-500/30 font-semibold hover:bg-black/30 hover:text-white hover:border-white">
						Proyect 2
					</button>

					<button className="descriptionSize pt-2 pb-1 mt-1 border-b-2 border-gray-500/30 font-semibold hover:bg-black/30 hover:text-white hover:border-white">
						Proyect 3
					</button>

					<button className="descriptionSize pt-2 pb-1 mt-1 border-b-2 border-gray-500/30 font-semibold hover:bg-black/30 hover:text-white hover:border-white">
						Proyect 4
					</button>

					<button className="descriptionSize pt-2 pb-1 mt-1 border-b-2 border-gray-500/30 font-semibold hover:bg-black/30 hover:text-white hover:border-white">
						Proyect 5
					</button>

					<button className="descriptionSize pt-2 pb-1 mt-1 border-b-2 border-gray-500/30 font-semibold hover:bg-black/30 hover:text-white hover:border-white">
						Proyect 6
					</button>
				</nav>

				{/* Contenido */}
				<div
					className={`col-span-2 md:col-span-3 lg:col-span-4 w-full h-full bg-black/10 text-center`}>
					<h2 className="subtitleSize font-bold text-green-500">{contents.title}</h2>

					<p className="descriptionSize italic">{contents.info}</p>
				</div>
			</div>
		</div>
	);
};

export default Proyects;
