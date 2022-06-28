import React, { useState } from "react";
import { Progress } from "flowbite-react";

const Skills = () => {
	const [hardtSkills, setHardSkills] = useState(true);

	return (
		<div className="w-full" id="third-part">
			<h2
				className="subtitleSize font-bold text-center pt-20"
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				About my skills
			</h2>
			<aside className="flex justify-around items-center w-full md:w-1/2 max-w-md mx-auto my-6">
				<button
					className="descriptionSize button"
					onClick={() => setHardSkills(true)}
					data-aos="fade-right"
					data-aos-delay="250"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					Hard Skills
				</button>
				<button
					className="descriptionSize button"
					onClick={() => setHardSkills(false)}
					data-aos="fade-left"
					data-aos-delay="350"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					Soft Skills
				</button>
			</aside>

			{hardtSkills ? <HardSkills /> : <SoftSkills />}
		</div>
	);
};

function HardSkills() {
	return (
		<div className="w-full max-w-5xl mx-auto">
			<h2
				className="subtitleSize text-green-500 font-bold text-center mb-6"
				data-aos="fade-up"
				data-aos-delay="0"
				data-aos-duration="400"
				data-aos-easing="ease-in-out">
				Hard Skills
			</h2>

			<article className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 justify-items-center items-center">
				{/* Las barras Progress */}
				<div className="flex flex-col gap-4 w-64 lg:w-80 max-w-sm">
					<div
						className="max-w-xs"
						data-aos="fade-right"
						data-aos-delay="400"
						data-aos-duration="400"
						data-aos-easing="ease-in-out">
						<h2 className="text-center text-red-500 font-bold">HTML</h2>
						<Progress progress={95} color="red" />
					</div>

					<div
						className="max-w-xs"
						data-aos="fade-right"
						data-aos-delay="500"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						<h2 className="text-center text-blue-600 font-bold">CSS + Tailwind CSS</h2>
						<Progress progress={85} color="blue" />
					</div>

					<div
						className="max-w-xs"
						data-aos="fade-right"
						data-aos-delay="600"
						data-aos-duration="600"
						data-aos-easing="ease-in-out">
						<h2 className="text-center text-yellow-400 font-bold">JavaScript</h2>
						<Progress progress={65} color="yellow" />
					</div>

					<div
						className="max-w-xs"
						data-aos="fade-right"
						data-aos-delay="700"
						data-aos-duration="700"
						data-aos-easing="ease-in-out">
						<h2 className="text-center text-cyan-500 font-bold">React</h2>
						<Progress progress={45} color="blue" />
					</div>
				</div>

				{/* Breve explicacion */}
				<div className="w-3/4 md:w-full col-span-2">
					<h3
						className="subtitleSize text-center font-medium text-green-300 mb-2"
						data-aos="fade-left"
						data-aos-delay="500"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						Important information
					</h3>
					<p
						className="descriptionSize italic text-center mt-2"
						data-aos="fade-left"
						data-aos-delay="650"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						These "Progresses" are not 100% real, I have made them at my whim, maybe my knowledge is
						superior or not, it will depend on the moment you see this. At the moment, I am learning
						with "Platzi" more and more about web development. On the other hand, I have not added
						my knowledge in C - C++ - Java - Python because I only have the basics, I do not handle
						it professionally.
					</p>
				</div>
			</article>
		</div>
	);
}

function SoftSkills() {
	return (
		<div
			className="w-full max-w-4xl mx-auto"
			data-aos="fade-up"
			data-aos-delay="150"
			data-aos-duration="500"
			data-aos-easing="ease-in-out">
			<h2 className="subtitleSize text-green-500 font-bold text-center mb-6">Soft Skills</h2>
			<article className="italic">
				<ul className="flex flex-col gap-y-2 justify-center items-start mx-2">
					<li className="descriptionSize">
						<strong className="text-green-300">Responsible/Punctual: </strong>These values have been
						instilled in me since I was a child. To the point that "I don't like to keep people
						waiting", in the same way, "I don't like to be kept waiting".
					</li>
					<li className="descriptionSize">
						<strong className="text-green-300">Empathetic: </strong>Putting yourself in the other
						person's shoes, knowing when someone needs help, or realizing they have problems is a
						very important and/or necessary skill.
					</li>
					<li className="descriptionSize">
						<strong className="text-green-300">Sincere/Honest: </strong>As a junior, the sincerity
						to recognize one's own ignorance or to ask for help when something is not working are
						vital points.
					</li>
					<li className="descriptionSize">
						<strong className="text-green-300">Group Worker: </strong>I have only worked in groups
						in school and college, and they were not bad experiences. If someone had a problem or
						didn't know something, as a group we took it upon ourselves to help and solve it.
					</li>
					<li className="descriptionSize">
						<strong className="text-green-300">Self-taught: </strong>For this industry, having this
						and I am no exception.
					</li>
				</ul>
			</article>
		</div>
	);
}

export default Skills;
