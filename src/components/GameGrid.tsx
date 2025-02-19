import useGames from "@/hooks/useGames";
import { Alert, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import GameCardShowCase from "./GameCardShowCase";
import GameCardWithShowCase from "./GameCardWithShowcase";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={5}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCardWithShowCase game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
