import { Router } from "express";
import { getArtists, getArtistById, createArtist } from "../controllers/artist.controller";

const router = Router();

router.get("/", getArtists);

router.get("/:id", getArtistById);

router.post("/create", createArtist);

export default router;