import {
  Box,
  Grid,
  GridItem,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/PlatFormSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import ItemPerPageSelector from "./components/ItemPerPageSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  itemsPerPage: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        {/* Collapsible genre list for mobile */}
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
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Box>
      </GridItem>
      <GridItem area="main">
        <Box paddingX={2}>
          <GameHeading gameQuery={gameQuery} />
          {/* Responsive filter controls */}
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
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
