import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button, Icon } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <Icon as={BsChevronDown}></Icon>
        </Button>
      </MenuTrigger>
      <MenuContent width={1}>
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="Date added">Date added</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Release date">Release date</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
        <MenuItem value="Average rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
