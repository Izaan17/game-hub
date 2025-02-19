import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { Game } from "@/hooks/useGames";
import { DataList } from "@chakra-ui/react";

interface Props {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

const GameShowCase = ({ game, isOpen, onClose }: Props) => {
  return (
    <DialogRoot open={isOpen} onOpenChange={onClose} size="cover">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{game.name}</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <DataList.Root>
            <DataList.Item key={game.id}>
              <DataList.ItemLabel>Game Name</DataList.ItemLabel>
              <DataList.ItemValue>{game.name}</DataList.ItemValue>
              <DataList.ItemLabel>Game ID</DataList.ItemLabel>
              <DataList.ItemValue>{game.id}</DataList.ItemValue>
              <DataList.ItemLabel>Game Score</DataList.ItemLabel>
              <DataList.ItemValue>{game.metacritic}</DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default GameShowCase;
