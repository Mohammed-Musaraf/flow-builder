import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import NodeItem from "./NodeItem";

export const NodeMenu: React.FC = () => {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeData: Record<string, string>
  ) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(nodeData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box
      h="full"
      position="absolute"
      w="sm"
      right="0"
      borderLeftWidth="1px"
      borderColor="blue.200"
      p="2"
      zIndex={1}
      bgColor="white"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem w="full">
          <NodeItem nodeTitle="Message" {...{ onDragStart }} />
        </GridItem>
      </Grid>
    </Box>
  );
};
