import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createConnection, Connection } from "typeorm";
dotenv.config();

import { config } from "./ormconfig";
const port = process.env.PORT || 3000;

import artistRoutes from "./routes/artist.routes";

const main = async () => {
	const connection: Connection = await createConnection(config);
	await connection.runMigrations();

	const app = express();

	app.use(cors({ origin: "http://localhost:3000", credentials: true }));
	app.use(bodyParser.json({ strict: true }));

	app.use("/artist", artistRoutes);

	app.listen(port, () => {
		console.log("server started!");
	});
};

main().catch(err => console.error(err));
