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
        <MenuItem value="">Relevance</MenuItem>
        <MenuItem value="">Date added</MenuItem>
        <MenuItem value="">Name</MenuItem>
        <MenuItem value="">Release date</MenuItem>
        <MenuItem value="">Popularity</MenuItem>
        <MenuItem value="">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
