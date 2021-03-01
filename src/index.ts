import express from "express";
const spotifyCharts = require("spotify-charts-com");

const port = process.env.PORT || 3000;

async function main() {
	const app = express();

	app.get("/", async (_, res) => {
		const d = await spotifyCharts.getCharts("regional", "daily", "in", "latest");
		res.json(d);
	});

	app.listen(port, () => {
		console.log("server started!");
	});
}

main().catch(err => console.error(err));
