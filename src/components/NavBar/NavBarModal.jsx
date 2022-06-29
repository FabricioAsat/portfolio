import React from "react";

const NavBarModal = ({ showModal, handleShowModal }) => {
	return (
		<div
			className={`fixed z-40 top-0 left-0 flex flex-col items-center justify-start pt-16 h-full w-full bg-gradient-to-t from-black/90 via-black/50 to-black/90 transition-all duration-500 lg:hidden ${
				showModal
					? "opacity-100 rotate-0"
					: "opacity-0 rotate-90 -translate-y-full translate-x-full"
			}`}>
			<a
				onClick={handleShowModal}
				href="#first-part"
				className="font-bold subtitleSize border-b my-4">
				Me
			</a>
			<a
				onClick={handleShowModal}
				href="#second-part"
				className="font-bold subtitleSize border-b my-4">
				About me
			</a>
			<a
				onClick={handleShowModal}
				href="#third-part"
				className="font-bold subtitleSize border-b my-4">
				Skills
			</a>
			<a
				onClick={handleShowModal}
				href="#fourth-part"
				className="font-bold subtitleSize border-b my-4">
				Proyects
			</a>
		</div>
	);
};

export default NavBarModal;
