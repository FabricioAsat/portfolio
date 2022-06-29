import { Carousel } from "flowbite-react";
import React from "react";

// ? Imports de las imagenes de mascotas
import firuse from "../../assets/pets/Firuse.jpeg";
import tifani from "../../assets/pets/Tifani.jpg";
import michi from "../../assets/pets/Michi.jpeg";
import tortugator from "../../assets/pets/Tortugator.jpeg";

const pets = [
	{ image: firuse, name: "Firuse" },
	{ image: tifani, name: "Tifani" },
	{ image: michi, name: "Michi" },
	{ image: tortugator, name: "Tortugator" },
];

const CarouselDogs = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 justify-items-center">
			<div
				className="aspect-video min-w-full min-h-full lg:px-8 rounded-xl md:order-last"
				data-aos="fade-down"
				data-aos-delay="300"
				data-aos-offset="200"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				<Carousel slideInterval={5000} indicators={false}>
					{pets.map((pet, index) => (
						<div key={index}>
							<img src={pet.image} alt={pet.name} className="touch-pan-x aspect-video" />
						</div>
					))}
				</Carousel>
			</div>
			<div className="flex flex-col justify-center items-center text-center px-8 md:order-first">
				<h2
					className="subtitleSize font-bold text-emerald-500"
					data-aos="fade-down"
					data-aos-delay="300"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					I'm an animal lover
				</h2>
				<p
					className="descriptionSize italic"
					data-aos="fade-down"
					data-aos-delay="300"
					data-aos-duration="500"
					data-aos-easing="ease-in-out">
					Since I was very little I have loved animals, when I was 4 years old I had my first dog
					named "Pichichu" who was responsible for making me love animals. At home I have 4 dogs, 1
					cat, birds, rabbits and a very brave turtle, who loves to eat dog food to feel part of
					them.
				</p>
			</div>
		</div>
	);
};

export default CarouselDogs;
