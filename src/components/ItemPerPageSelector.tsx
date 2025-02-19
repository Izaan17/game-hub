import { Button, Icon, IconButton, Text } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedItemsPerPage: number;
  onItemsPerPageSelect: (item: number) => void;
}

const ItemPerPageSelector = ({
  selectedItemsPerPage,
  onItemsPerPageSelect,
}: Props) => {
  const numberPerPage = [20, 25, 30, 35, 40];
  const itemsPerPage = numberPerPage.map((number) => {
    return { value: number, label: number };
  });

  const currentItemsPerPage = itemsPerPage.find(
    (numberPerPage) => numberPerPage.value === selectedItemsPerPage
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <IconButton variant="outline" size="sm">
          <Text>Results per page: {currentItemsPerPage?.label || 20}</Text>
          <BsChevronDown />
        </IconButton>
      </MenuTrigger>
      <MenuContent width={1}>
        {itemsPerPage.map((numberPerPage) => (
          <MenuItem
            key={numberPerPage.label}
            value={numberPerPage.value}
            onClick={() => onItemsPerPageSelect(numberPerPage.value)}
            cursor={"pointer"}
          >
            {numberPerPage.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default ItemPerPageSelector;
