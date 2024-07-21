import { Button, VStack } from "@chakra-ui/react";
import React from "react";

export const Header: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  return (
    <VStack w="full" alignItems="flex-end" bgColor="blue.100" p="2">
      <Button
        size="sm"
        variant="outline"
        colorScheme="blue"
        bgColor="white"
        px="4"
        onClick={onSubmit}
      >
        Save Changes
      </Button>
    </VStack>
  );
};
