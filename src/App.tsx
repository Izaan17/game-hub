import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
