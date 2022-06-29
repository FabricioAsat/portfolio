import React from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

const FooterComp = () => {
	function handleClick() {
		console.log("first");
	}

	return (
		<footer className="w-full flex bg-gradient-to-b from-transparent to-black/30 text-xs lg:text-sm">
			<span className="w-full mx-2 flex items-end justify-between my-6">
				<div>
					<small className="italic text-gray-300/90">Fabricio Daniel Asat - Portfolio 2022</small>
					<small className="flex gap-2 items-center italic text-gray-300/90 lg:text-base">
						<SiGmail />
						fabricioasat00@gmail.com (Recommended)
					</small>
				</div>

				<div>
					<h3 className="text-center text-slate-500 font-bold descriptionSize mb-2">Contacts</h3>
					<nav className="flex gap-4 max-w-xs justify-end items-center">
						<a
							href="https://github.com/FabricioAsat"
							target={"_blank"}
							className="flex gap-1 items-center border-b-2 border-slate-500/40 px-2 py-1 mx-2 hover:border-slate-300/90 hover:text-slate-300/90 text-slate-500 transition-colors duration-300"
							onClick={handleClick}
							rel="noreferrer">
							<SiGithub className="h-4 w-4" />
							<h4 className="font-bold text-base hidden md:block">Github</h4>
						</a>

						<a
							href="https://www.linkedin.com/in/fabricio-daniel-asat-780127237/"
							target={"_blank"}
							className="flex gap-1 items-center border-b-2 border-slate-500/40 px-2 py-1 mx-2 hover:border-slate-300/90 hover:text-slate-300/90 text-slate-500 transition-colors duration-300"
							onClick={handleClick}
							rel="noreferrer">
							<SiLinkedin className="h-4 w-4" />
							<h4 className="font-bold text-base hidden md:block">LinkedIn</h4>
						</a>
					</nav>
				</div>
			</span>
		</footer>
	);
};

export default FooterComp;
