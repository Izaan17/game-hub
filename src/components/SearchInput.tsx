import { HStack, Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <HStack width="100%">
      <InputGroup startElement={<LuSearch />} width="100%">
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
          width="100%"
        />
      </InputGroup>
    </HStack>
  );
};

export default SearchInput;
