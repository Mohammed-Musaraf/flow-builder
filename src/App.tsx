import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import Flow from "./components/Flow";
import { Header } from "./components/Header";

const App: React.FC = () => {
  useEffect(() => {
    const removePanels = () => {
      const panels = document.querySelectorAll(".react-flow__attribution");
      panels.forEach((panel) => panel.remove());
    };
    removePanels();
  }, []);

  return (
    <Box
      style={{ width: "full", height: "97vh", overflow: "clip" }}
      position="relative"
    >
      <Flow />
    </Box>
  );
};

export default App;
