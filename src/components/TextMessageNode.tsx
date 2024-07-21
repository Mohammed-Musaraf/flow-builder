import { HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Handle, Position } from "@xyflow/react";
import { MessageCircleMore } from "lucide-react";
import { CSSProperties, memo } from "react";
import { NodeType } from "./Flow";
import WhatsappIcon from "/whatsapp.png";

const handleStyle: CSSProperties = {
  border: "4px solid #1A3636",
  backgroundColor: "#fff",
};
const sourceHandleStyle: CSSProperties = {
  ...handleStyle,
  transform: "translateX(25%)",
};
const targetHandleStyle: CSSProperties = {
  ...handleStyle,
  transform: "translateX(-25%)",
};

const TextMessageNode: React.FC<NodeType> = (node) => {
  return (
    <VStack
      align="flex-start"
      rounded="md"
      borderStyle={"solid"}
      borderWidth={2}
      borderColor={"brand.500"}
      bg="white"
      spacing={0}
      width="250px"
      role="group"
      boxShadow="md"
    >
      <Handle
        type="target"
        style={targetHandleStyle}
        position={Position.Left}
        id={`${node.id}-target`}
      />
      <Handle
        type="source"
        style={sourceHandleStyle}
        position={Position.Right}
        id={`${node.id}-source`}
      />
      <HStack
        align="center"
        justify="flex-start"
        w="full"
        maxW="full"
        px={2}
        py={1}
        bg="blue.50"
        spacing={0}
        roundedTop="md"
        overflow="hidden"
      >
        <Icon as={MessageCircleMore} boxSize="14px" />
        <Text
          flex={1}
          maxW="full"
          fontWeight="medium"
          fontSize="xs"
          noOfLines={1}
          display="block"
          pl={1}
          color="gray.700"
        >
          Send Message
        </Text>
        <Image src={WhatsappIcon} boxSize="14px" />
      </HStack>

      <VStack spacing={1} align="flex-start" w="full" p={2}>
        <Text
          fontSize="xs"
          whiteSpace="pre-line"
          className="dont-break-out"
          overflow="hidden"
          textOverflow="ellipsis"
          noOfLines={1}
          p="1"
          textColor="gray.600"
        >
          {node.data.value}
        </Text>
      </VStack>
    </VStack>
  );
};

export default memo(TextMessageNode);
