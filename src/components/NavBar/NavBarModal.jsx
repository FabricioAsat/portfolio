import React from "react";

const NavBarModal = ({ showModal }) => {
	return (
		<div
			className={`fixed z-40 top-0 left-0 block h-full w-full bg-gradient-to-t from-black/90 via-black/50 to-black/90 transition-all duration-500 lg:hidden ${
				showModal
					? "opacity-100 rotate-0"
					: "opacity-0 rotate-90 -translate-y-full translate-x-full"
			}`}>
			<h2>Acá van a ir los links en modo Mobile</h2>
		</div>
	);
};

export default NavBarModal;
