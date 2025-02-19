import {
  DialogBody,
  DialogCloseTrigger,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { Game } from "@/hooks/useGames";
import { DataList, DataListRoot, DialogContent } from "@chakra-ui/react";

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
          <DataListRoot>
            <DataList.Item key={game.id}>
              <DataList.ItemLabel>Game Name</DataList.ItemLabel>
              <DataList.ItemValue>{game.name}</DataList.ItemValue>
              <DataList.ItemLabel>Game ID</DataList.ItemLabel>
              <DataList.ItemValue>{game.id}</DataList.ItemValue>
              <DataList.ItemLabel>Game Score</DataList.ItemLabel>
              <DataList.ItemValue>{game.metacritic}</DataList.ItemValue>
            </DataList.Item>
          </DataListRoot>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default GameShowCase;
