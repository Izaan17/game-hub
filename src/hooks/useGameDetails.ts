import useFetch from "./useFetch";

export interface GameDetailsResponse {
  description_raw: string;
}

const useGameDetails = (id: number) =>
  useFetch<GameDetailsResponse>(`/games/${id}`, {}, [id]);

export default useGameDetails;
