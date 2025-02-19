import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
  onClick?: () => void;
}

const GameCard = ({ game, onClick }: Props) => {
  return (
    <Card.Root
      borderRadius={10}
      overflow="hidden"
      cursor="pointer"
      onClick={onClick}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          fontSize="2xl"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {game.name}
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
