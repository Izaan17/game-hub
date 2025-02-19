import usePlatforms from "@/hooks/usePlatforms";
import { Button, Icon } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatFormSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          <Icon as={BsChevronDown as React.ElementType}></Icon>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem 
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
            cursor={"pointer"}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatFormSelector;
