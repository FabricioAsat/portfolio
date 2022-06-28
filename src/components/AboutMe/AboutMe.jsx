import React from "react";
import CarouselDogs from "./CarouselDogs";
import FavoriteThings from "./FavoriteThings";

const AboutMe = () => {
	return (
		<div className="flex flex-col items-center gap-y-4" id="second-part">
			<h2
				className="titleSize font-bold underline underline-offset-2 decoration-2 mt-20"
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="300"
				data-aos-easing="ease-in-out">
				More about me
			</h2>
			<p
				className="descriptionSize text-center"
				data-aos="fade-up"
				data-aos-delay="300"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				I am a student of Systems Engineering, I am in my third year and my goal is to focus on web
				development, both frontend and backend.
			</p>

			{/* Mis mascotas */}
			<CarouselDogs />

			{/* Mis cosas favoritas */}
			<FavoriteThings />
		</div>
	);
};

export default AboutMe;
