import useFetch from "./useFetch";

export interface GameDetailsResponse {
  id: number;
  name: string;
  description: string;
  rating: number;
}

export interface GameDetails {
  id: number;
  name: string;
  description: string;
  rating: number;
}

const useGameDetails = (id: number) =>
  useFetch<GameDetailsResponse>(`/games/${id}`, {}, [id]);

export default useGameDetails;
