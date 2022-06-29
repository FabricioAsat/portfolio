module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				principalBackground: "url('/src/assets/background.jpg')",
				unknownBackground: "url('/src/assets/bg-notFound.jpg')",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
