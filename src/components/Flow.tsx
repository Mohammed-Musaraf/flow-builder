import {
  addEdge,
  ReactFlow,
  ReactFlowProps,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
  XYPosition,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  CSSProperties,
  DragEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";

import { Box, useDisclosure } from "@chakra-ui/react";
import "./index.css";
import MessageForm from "./MessageForm";
import { NodeMenu } from "./NodeMenu";
import messageNode from "./TextMessageNode";

const initialNodes = [
  {
    id: "1",
    type: "messageNode",
    data: { nodeName: "messageNode", value: "Text message goes here" },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
  messageNode,
};

type OnConnect = NonNullable<ReactFlowProps["onConnect"]>;
export interface NodeType {
  id: string;
  type: string;
  position: XYPosition;
  data: Record<string, string>;
}

const flowStyle: CSSProperties = {
  flexDirection: "column",
  display: "flex",
  flexGrow: "1",
  height: "100%",
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [selectedNode, setSelectedNode] = useState<NodeType | undefined>();
  const disclosureProps = useDisclosure();
  const [nodes, setNodes, onNodesChange] =
    useNodesState<NodeType>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback<OnConnect>(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const { nodeName } = JSON.parse(type);
      const newNode: NodeType = {
        id: getId(),
        type: nodeName,
        position,
        data: JSON.parse(type),
      };

      setNodes((nds) => nds.concat(newNode));
      setSelectedNode(newNode);
      disclosureProps.onOpen();
    },
    [screenToFlowPosition]
  );

  const onFormSubmit = (data: NodeType) => {
    setNodes((nodes) =>
      nodes.map((node) => (node.id === data.id ? data : node))
    );
  };

  const removeEmptyNodes = () => {
    setNodes((nodes) => {
      const validNode = nodes.filter((node) => node.data?.value);
      return validNode;
    });
  };

  const onCancelFormSubmit = (node: NodeType) => {
    if (!node.data.value) {
      removeEmptyNodes();
    }
  };

  return (
    <Box sx={flowStyle} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
      />
      <NodeMenu />
      <MessageForm
        {...disclosureProps}
        node={selectedNode!}
        onSubmit={onFormSubmit}
        onCancel={onCancelFormSubmit}
      />
    </Box>
  );
};

export default () => (
  <ReactFlowProvider>
    <DnDFlow />
  </ReactFlowProvider>
);
