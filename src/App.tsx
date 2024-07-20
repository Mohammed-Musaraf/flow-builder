import React, { useEffect } from "react";
import Flow from "./components/Flow";

const App = () => {
  useEffect(() => {
    const removePanels = () => {
      const panels = document.querySelectorAll(".react-flow__attribution");
      console.log(panels);
      panels.forEach((panel) => panel.remove());
    };

    removePanels();
  }, []);
  return (
    <div style={{ width: "full", height: "97vh", overflow: "clip" }}>
      <Flow />
    </div>
  );
};

export default App;
