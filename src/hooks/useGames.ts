import { GameQuery } from "@/App";
import useFetch from "./useFetch";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  short_screenshots: { image: string }[];
  released: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) =>
  useFetch<GamesResponse>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page_size: gameQuery.itemsPerPage,
      },
    },
    [gameQuery]
  );

export default useGames;
