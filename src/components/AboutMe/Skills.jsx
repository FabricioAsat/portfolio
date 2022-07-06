import React, { useState } from "react";

const Skills = () => {
	const [hardtSkills, setHardSkills] = useState(true);

	return (
		<div className="w-full" id="third-part">
			<h2
				className="subtitleSize font-bold text-center lg:pt-20"
				data-aos="fade-down"
				data-aos-delay="150"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				About my skills
			</h2>
			<aside className="flex justify-around items-center w-full md:w-1/2 max-w-md mx-auto my-6">
				<button
					className="descriptionSize button"
					onClick={() => setHardSkills(true)}
					data-aos="fade-down"
					data-aos-delay="250"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					Hard Skills
				</button>
				<button
					className="descriptionSize button"
					onClick={() => setHardSkills(false)}
					data-aos="fade-down"
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
				data-aos="fade-down"
				data-aos-delay="150"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				Hard Skills
			</h2>

			<article className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 justify-items-center items-center">
				{/* Las barras Progress */}
				<div className="flex flex-col gap-4 w-64 lg:w-80 max-w-sm">
					<div className="max-w-xs">
						<h2
							className="text-center text-white underline decoration-2 underline-offset-2 decoration-green-500 font-bold"
							data-aos="fade-down"
							data-aos-delay="300"
							data-aos-duration="500"
							data-aos-easing="ease-in-out">
							HTML
						</h2>
						<p
							className="text-sm italic text-center"
							data-aos="fade-down"
							data-aos-delay="400"
							data-aos-duration="500"
							data-aos-easing="ease-in-out">
							Good knowledge of HTML and thanks to its close resemblance to React.JS design, my
							comprehension skills will not decline.
						</p>
					</div>

					<div className="max-w-xs">
						<span className="flex justify-center">
							<h2
								className="text-center text-white underline decoration-2 underline-offset-2 decoration-green-500 font-bold"
								data-aos="fade-down"
								data-aos-delay="500"
								data-aos-duration="500"
								data-aos-easing="ease-in-out">
								CSS &
							</h2>
							<h2
								className="text-center text-white underline decoration-2 underline-offset-2 decoration-green-500 font-bold"
								data-aos="fade-down"
								data-aos-delay="500"
								data-aos-duration="500"
								data-aos-easing="ease-in-out">
								& Tailwind
							</h2>
						</span>
						<p
							className="text-sm italic text-center"
							data-aos="fade-down"
							data-aos-delay="600"
							data-aos-duration="500"
							data-aos-easing="ease-in-out">
							Tailwind is simply CSS using classes, so my CSS knowledge is not impaired by using
							this (perhaps limited) framework.
						</p>
					</div>

					<div className="max-w-xs">
						<span className="flex justify-center">
							<h2
								className="text-center text-white underline decoration-2 underline-offset-2 decoration-green-500 font-bold"
								data-aos="fade-down"
								data-aos-delay="700"
								data-aos-duration="500"
								data-aos-easing="ease-in-out">
								JavaScript &
							</h2>
							<h2
								className="text-center text-white underline decoration-2 underline-offset-2 decoration-green-500 font-bold"
								data-aos="fade-down"
								data-aos-delay="700"
								data-aos-duration="500"
								data-aos-easing="ease-in-out">
								& React
							</h2>
						</span>
						<p
							className="text-sm italic text-center"
							data-aos="fade-down"
							data-aos-delay="800"
							data-aos-duration="500"
							data-aos-easing="ease-in-out">
							In the process of perfecting it completely
						</p>
					</div>
				</div>

				{/* Breve explicacion */}
				<div className="w-3/4 md:w-full col-span-2">
					<h3
						className="subtitleSize text-center font-medium text-white underline decoration-2 underline-offset-2 decoration-green-500 mb-2"
						data-aos="fade-down"
						data-aos-delay="300"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						Important information
					</h3>
					<p
						className="descriptionSize italic text-center mt-2"
						data-aos="fade-down"
						data-aos-delay="400"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						Although I have a very good knowledge of the basics in each of these technologies I have
						a lot of things to improve. In fact, I am using "Platzi" to achieve it. On the other
						hand, I have not added my knowledge in C - C++ - Java - Python because I only have the
						basics and I do not handle them professionally.
					</p>
				</div>
			</article>
		</div>
	);
}

function SoftSkills() {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<h2
				className="subtitleSize text-green-500 font-bold text-center mb-6"
				data-aos="fade-down"
				data-aos-delay="150"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				Soft Skills
			</h2>
			<article className="italic">
				<ul className="flex flex-col gap-y-2 justify-center items-start mx-2">
					<li
						className="descriptionSize"
						data-aos="fade-down"
						data-aos-delay="300"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						<strong className="text-white underline decoration-2 underline-offset-2 decoration-green-500">
							Responsible/Punctual:{" "}
						</strong>
						These values have been instilled in me since I was a child. To the point that "I don't
						like to keep people waiting", in the same way, "I don't like to be kept waiting".
					</li>
					<li
						className="descriptionSize"
						data-aos="fade-down"
						data-aos-delay="400"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						<strong className="text-white underline decoration-2 underline-offset-2 decoration-green-500">
							Empathetic:{" "}
						</strong>
						Putting oneself in the other person's shoes, knowing when someone needs help or
						realizing who is in trouble is a very important and/or necessary skill.
					</li>
					<li
						className="descriptionSize"
						data-aos="fade-down"
						data-aos-delay="500"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						<strong className="text-white underline decoration-2 underline-offset-2 decoration-green-500">
							Sincere/Honest:{" "}
						</strong>
						As a junior, the sincerity to recognize one's own ignorance or to ask for help when
						something is not working are vital points.
					</li>
					<li
						className="descriptionSize"
						data-aos="fade-down"
						data-aos-delay="600"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						<strong className="text-white underline decoration-2 underline-offset-2 decoration-green-500">
							Group Worker:{" "}
						</strong>
						I have only worked in groups in school and college, and they were not bad experiences.
						If someone had a problem or didn't know something, as a group we took it upon ourselves
						to help and solve it.
					</li>
					<li
						className="descriptionSize"
						data-aos="fade-down"
						data-aos-delay="700"
						data-aos-duration="500"
						data-aos-easing="ease-in-out">
						<strong className="text-white underline decoration-2 underline-offset-2 decoration-green-500">
							Self-taught:{" "}
						</strong>
						To progress in this industry you have to be self-taught, and I am no exception.
					</li>
				</ul>
			</article>
		</div>
	);
}

export default Skills;
