import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selctedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selctedGenre?.id } }, [
    selctedGenre?.id,
  ]);

export default useGames;
