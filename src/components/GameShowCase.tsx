import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { Game } from "@/hooks/useGames";
import {
  ConditionalValue,
  DataList,
  useBreakpointValue,
} from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

const GameShowCase = ({ game, isOpen, onClose }: Props) => {
  const size = useBreakpointValue({
    base: "full",
    md: "cover",
  } as ConditionalValue<{}>);
  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={onClose}
      size={size}
      scrollBehavior="inside"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{game.name}</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <ImageCarousel
            images={game.short_screenshots.map((ss) => ss.image)}
          />
          <DataList.Root>
            <DataList.Item key={game.id}>
              <DataList.ItemLabel>Game Name</DataList.ItemLabel>
              <DataList.ItemValue>{game.name}</DataList.ItemValue>
              <DataList.ItemLabel>Game ID</DataList.ItemLabel>
              <DataList.ItemValue>{game.id}</DataList.ItemValue>
              <DataList.ItemLabel>Game Score</DataList.ItemLabel>
              <DataList.ItemValue>
                <CriticScore score={game.metacritic} />
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default GameShowCase;
