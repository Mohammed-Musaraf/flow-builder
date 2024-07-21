import { Icon, Text, VStack } from "@chakra-ui/react";
import { MessageCircleMore } from "lucide-react";
import React from "react";

const NodeItem: React.FC<{
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: Record<string, string>
  ) => void;
  nodeTitle: string;
}> = ({ onDragStart, nodeTitle }) => {
  return (
    <VStack
      w="full"
      borderWidth="1px"
      p="2"
      borderRadius="4px"
      borderColor="blue.400"
      maxW="160px"
      onDragStart={(event) => onDragStart(event, { nodeName: "messageNode" })}
      draggable
      cursor="grab"
    >
      <Icon as={MessageCircleMore} boxSize="20px" color="blue.500" />
      <Text fontSize="sm" textColor="blue.500">
        {nodeTitle}
      </Text>
    </VStack>
  );
};

export default NodeItem;
