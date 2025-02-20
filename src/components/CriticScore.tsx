import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score === undefined || score === null
      ? "grey"
      : score > 75
      ? "green"
      : score > 60
      ? "yellow"
      : "";

  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score ? score : "N/A"}
    </Badge>
  );
};

export default CriticScore;
