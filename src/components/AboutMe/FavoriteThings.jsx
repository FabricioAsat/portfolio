import React from "react";

import game from "../../assets/favoriteThings/game.jpg";
import lasagna from "../../assets/favoriteThings/lasagna.jpg";
import musica from "../../assets/favoriteThings/musica.jpg";
import paz from "../../assets/favoriteThings/paz.webp";

const things = [
	{
		img: lasagna,
		title: "Favorite Food",
		description:
			"Lasagna is my favorite, it's a very delicious food and one that I rarely get to eat. Its rarity (and also its taste, of course) is what makes it so special.",
	},
	{
		img: game,
		title: "Favorite Games",
		description:
			"Valorant and League of Legends are my favorite games, I play them every weekend with friends and have a lot of fun. (Note: They are my favorites because they are the only ones I play).",
	},
	{
		img: musica,
		title: "Music",
		description:
			"This is very varied. When I want to calm down, I listen to Argentinean national rock or electronic music. When I'm playing or programming/studying, I listen to chill or lofi music.",
	},
	{
		img: paz,
		title: "Paz",
		description:
			"Another thing I like is my moment of peace, that time of the day when I don't do or think about anything, take a deep breath and put my problems aside for a moment.",
	},
];

const FavoriteThings = () => {
	return (
		<div>
			<h2
				className="subtitleSize font-bold text-center"
				data-aos="fade-down"
				data-aos-delay="300"
				data-aos-duration="500"
				data-aos-easing="ease-in-out">
				About my favorite things / hobbies
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-4 lg:mx-4">
				{things.map((thing, index) => (
					<Card
						key={index}
						image={thing.img}
						title={thing.title}
						description={thing.description}
						delay={String(index * 100 + 100)}
					/>
				))}
			</div>
		</div>
	);
};

function Card({ image, title, description, delay }) {
	return (
		<div
			className={`flex flex-col items-center backdrop-blur-sm rounded-3xl border-2 border-gray-600/20 overflow-hidden h-auto max-w-md mx-auto`}
			data-aos={`fade-down`}
			data-aos-delay={`${delay}`}
			data-aos-duration="800"
			data-aos-easing="ease-in-out">
			<img
				src={image}
				alt="Not Found"
				className={`object-cover object-center h-1/2 w-full justify-start opacity-75`}
			/>

			<span className={`flex flex-col h-full w-full justify-center items-center px-4`}>
				<h2 className="subtitleSize font-medium text-center text-emerald-400">{title}</h2>
				<p className="descriptionSize text-center">{description}</p>
			</span>
		</div>
	);
}

export default FavoriteThings;
