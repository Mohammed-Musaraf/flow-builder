import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
  Textarea,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { NodeType } from "./Flow";

type MessageFormProps = UseDisclosureReturn & {
  node: NodeType;
  onSubmit: (node: NodeType) => void;
  onCancel: (node: NodeType) => void;
};

const MessageForm: React.FC<MessageFormProps> = (props) => {
  const { onClose, isOpen, node, onSubmit, onCancel } = props;
  const [textValue, setTextValue] = useState<string>(node?.data?.value);
  const handleFormSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    onSubmit({ ...node, data: { ...node.data, value: textValue } });
    onClose();
  };
  const onDrawerClose = () => {
    onCancel(node);
    onClose();
  };
  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onDrawerClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" borderColor="gray.300" p="1">
          <HStack w="full">
            <IconButton
              aria-label="back-button"
              icon={<Icon as={ArrowLeft} />}
              variant="ghost"
              size="sm"
              onClick={onDrawerClose}
            />
            <Spacer />
            <Text fontSize="sm" textAlign="center">
              Message
            </Text>
            <Spacer />
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <FormLabel fontSize="sm" textColor="gray.600">
            Text
          </FormLabel>
          <Textarea
            placeholder="Type here..."
            onChange={(e) => setTextValue(e.target.value)}
          />
        </DrawerBody>
        <DrawerFooter>
          <Button size="sm" variant="outline" mr={3} onClick={onDrawerClose}>
            Cancel
          </Button>
          <Button size="sm" colorScheme="blue" onClick={handleFormSubmit}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MessageForm;
