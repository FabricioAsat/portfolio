import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
	return (
		<div id="first-part" className="py-4">
			<picture className="grid grid-cols-1 justify-items-center items-center gap-y-2 lg:grid-cols-2 mt-20">
				<img
					src={hero}
					alt="Me"
					className="w-8/12 max-w-xs lg:max-w-md"
					data-aos="fade-down"
					data-aos-duration="500"
					data-aos-once="true"
				/>

				<div className="flex flex-col justify-center gap-y-9 text-center pt-4 h-full">
					<div>
						<h2
							className="font-bold text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
							data-aos="fade-left"
							data-aos-delay="500"
							data-aos-duration="500"
							data-aos-once="true">
							Fabricio Daniel Asat
						</h2>
						<p
							className="italic subtitleSize"
							data-aos="fade-left"
							data-aos-delay="600"
							data-aos-duration="500"
							data-aos-once="true">
							Frontend Developer Jr.
						</p>
					</div>

					<aside className="mt-8 mx-4 max-w-xl">
						<h3
							className="font-bold subtitleSize"
							data-aos="fade-left"
							data-aos-delay="700"
							data-aos-duration="500"
							data-aos-once="true">
							What about me?
						</h3>
						<p
							className="italic descriptionSize"
							data-aos="fade-left"
							data-aos-delay="800"
							data-aos-duration="500"
							data-aos-once="true">
							I am 22 years old and have been studying web development for about 1 year. Until
							today, I know in depth the basics of HTML, CSS and JavaScript. At the same time, I am
							specializing in React.JS and Tailwind through projects. Then, I will move towards
							their most demanded framework "Next.JS".
						</p>
					</aside>
				</div>
			</picture>
		</div>
	);
};

export default Hero;
