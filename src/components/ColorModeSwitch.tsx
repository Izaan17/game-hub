import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorPalette="green"
        defaultChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="md"
      >
        <Text>Dark Mode</Text>
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
