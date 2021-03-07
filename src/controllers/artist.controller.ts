import { Request, Response } from "express";
import { Artist } from "../entities/Artist";
import { status200, status400, status404 } from "../utils/constants";

export const getArtists = async (_: Request, res: Response) => {
  const artists = await Artist.find();
  return res.status(200).json(artists);
}

export const getArtistById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const artist = await Artist.findOne(id);
  if (artist) {
    return res.status(200).json(artist);
  }
  return res.status(404).json(status404);
}

export const createArtist = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json(status400);
  }
  
  const newArtist = new Artist();
  newArtist.name = name;
  await newArtist.save();

  return res.status(200).json(status200)
}

export const deleteArtist = async (req: Request, res: Response) => {
  const { id } = req.body;
  const artist = await Artist.findOne(id);
  if (!artist) {
    return res.status(200).json(status400);
  }

  await artist.remove();
  return res.status(200).json(status200);
}
