import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo}></Image>
      <SearchInput onSearch={onSearch} />
      {/* <ColorModeSwitch></ColorModeSwitch> */}
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
