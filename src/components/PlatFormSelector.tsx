import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

const PlatFormSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Platform
        </Button>
      </MenuTrigger>
      <MenuContent width={1}>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatFormSelector;
