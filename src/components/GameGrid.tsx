import { Game } from "@/hooks/useGames";
import { Alert, SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import GameCardWithShowCase from "./GameCardWithShowcase";

interface Props {
  gameQuery: GameQuery;
  isLoading: boolean;
  error: any;
  games: Game[];
}

const GameGrid = ({ gameQuery, isLoading, error, games }: Props) => {
  const skeletons = Array.from(
    { length: gameQuery.itemsPerPage || 20 },
    (_, key) => key
  );

  if (error)
    return (
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Unable to load games</Alert.Title>
          <Alert.Description>{error}</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={3}>
      {isLoading &&
        gameQuery.page === 1 &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCardWithShowCase game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
