import React, { useState } from "react";

export default function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const [nodes, setNodes] = useState(["input"]);

  return (
    <aside>
      <div style={{ fontSize: "24px" }} className="description">
        You can drag these nodes to the pane on the right.
      </div>

      {nodes &&
        nodes.map((node) => (
          <div
            className="dndnode input"
            onDragStart={(event) => onDragStart(event, "input")}
            draggable
          >
            {node.value}
          </div>
        ))}
    </aside>
  );
}
