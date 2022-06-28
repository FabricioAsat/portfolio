import React, { useState } from "react";

const Proyects = () => {
	const [proyect, setProyect] = useState("");

	return (
		<div className="my-6 h-96 w-full bg-white/20" id="fourth-part">
			<h2 className="titleSize font-bold text-center mt-20">My proyects</h2>
			<p>Acá van a ir ya luego.. Queda por hacer</p>
		</div>
	);
};

function ProyectOne() {
	return <div></div>;
}

export default Proyects;
