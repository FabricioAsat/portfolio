import React, { useState } from "react";

import imgNotFound from "../../assets/bg-notFound.jpg";

const Proyects = () => {
	const [contents, setContent] = useState({ title: "", info: "", img: imgNotFound });

	return (
		<div className="my-6 h-96 w-full" id="fourth-part">
			<h2 className="titleSize font-bold text-center mt-20">My proyects</h2>

			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
				<div className="col-span-2 md:col-span-3 lg:col-span-4 ml-4"></div>
			</div>
		</div>
	);
};

export default Proyects;
