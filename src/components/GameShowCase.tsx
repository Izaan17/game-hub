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
import PlatFormIconList from "./PlatFormIconList";
import useGameDetails from "@/hooks/useGameDetails";

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

  const { data } = useGameDetails(game.id);

  const dataListItems = [
    { label: "Name", value: game.name },
    { label: "Description", value: data?.description.replace(/<[^>]+>/g, "") },
    { label: "Release Date", value: game.released },
    { label: "ID", value: game.id },
  ];

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
          <DataList.Root divideY="5px">
            {dataListItems.map((item) => (
              <DataList.Item key={item.label} pt="4">
                <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                <DataList.ItemValue>{item.value}</DataList.ItemValue>
              </DataList.Item>
            ))}
            <DataList.Item pt="4">
              <DataList.ItemLabel>Game Score</DataList.ItemLabel>
              <DataList.ItemValue>
                <CriticScore score={game.metacritic} />
              </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item pt="4">
              <DataList.ItemLabel>Available On</DataList.ItemLabel>
              <PlatFormIconList
                platforms={game.parent_platforms.map(
                  (platforms) => platforms.platform
                )}
              />
            </DataList.Item>
          </DataList.Root>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default GameShowCase;
