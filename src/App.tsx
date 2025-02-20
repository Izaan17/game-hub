import { Box, Button, Grid, GridItem, Spinner, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/PlatFormSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import ItemPerPageSelector from "./components/ItemPerPageSelector";
import useGames, { Game } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  itemsPerPage: number;
  page: number | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [games, setGames] = useState<Set<Game>>(new Set());
  const { data, isLoading, error } = useGames(gameQuery);

  useEffect(() => {
    if (data?.results) {
      setGames((prevGames) => {
        if (gameQuery.page === 1) {
          return new Set(data.results);
        } else {
          // Create a new Set with all previous games plus new ones
          const newGames = new Set(prevGames);
          data.results.forEach((game) => newGames.add(game));
          return newGames;
        }
      });
    }
  }, [data, gameQuery.page]);

  // Reset games when filters change (except page)
  useEffect(() => {
    setGames(new Set()); // Reset with empty Set
    setGameQuery((prev) => ({ ...prev, page: 1 })); // Reset to first page
  }, [
    gameQuery.genre,
    gameQuery.platform,
    gameQuery.sortOrder,
    gameQuery.searchText,
  ]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      gap={4}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area="aside" paddingX={{ base: 2, lg: 5 }}>
        <Box
          display={{ base: "block", lg: "block" }}
          maxHeight={{ base: "200px", lg: "none" }}
          overflowY={{ base: "auto", lg: "initial" }}
          borderBottom={{
            base: "1px solid",
            lg: "none",
          }}
          marginBottom={{ base: 4, lg: 0 }}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              const newGenre = gameQuery?.genre === genre ? null : genre;
              setGameQuery({ ...gameQuery, genre: newGenre });
            }}
          />
        </Box>
      </GridItem>
      <GridItem area="main">
        <Box paddingX={2}>
          <GameHeading gameQuery={gameQuery} />
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 4 }}
            marginBottom={5}
            width="100%"
            flexWrap="wrap"
          >
            <PlatFormSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
            <ItemPerPageSelector
              selectedItemsPerPage={gameQuery.itemsPerPage}
              onItemsPerPageSelect={(itemsPerPage) =>
                setGameQuery({ ...gameQuery, itemsPerPage })
              }
            />
          </Stack>
        </Box>
        <GameGrid
          gameQuery={gameQuery}
          games={Array.from(games.values())}
          isLoading={isLoading}
          error={error}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin="10px"
          paddingBottom="10px"
        >
          <Button
            onClick={() =>
              setGameQuery({ ...gameQuery, page: (gameQuery.page || 1) + 1 })
            }
            variant="subtle"
            width="100%"
            disabled={isLoading}
          >
            Load More Games
          </Button>
          {isLoading && <Spinner size="lg" marginTop="10px" />}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
