import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import NavBarModal from "./NavBarModal";

const Mobile = () => {
	const [showModal, setShowModal] = useState(false);

	function handleShowModal() {
		setShowModal(!showModal);
	}

	return (
		<>
			<div
				className={`block fixed right-4 top-4 z-50 bg-slate-900 rounded-full p-2 border-x-4 border-gray-500/75 lg:hidden transition-transform duration-500 ${
					showModal ? "-rotate-45" : "rotate-0"
				}`}>
				<GiHamburgerMenu size="30px" color="rgb(226 232 240)" onClick={handleShowModal} />
			</div>
			<NavBarModal showModal={showModal} handleShowModal={handleShowModal} />
		</>
	);
};

export default Mobile;
