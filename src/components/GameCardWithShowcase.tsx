import { useState } from "react";
import { Game } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameShowCase from "./GameCardShowCase";

interface Props {
  game: Game;
}

const GameCardWithShowCase = ({ game }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GameCard game={game} onClick={() => setIsOpen(true)} />
      <GameShowCase
        game={game}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default GameCardWithShowCase;
