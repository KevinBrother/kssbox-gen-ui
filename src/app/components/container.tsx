"use client";

import React from "react";

export function Container(props: any) {
  const [dragData, setDragData] = React.useState(<div>1</div>);

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text");
    console.log(data);
    setDragData(<div className="border border-gray-400 p-2">{data}</div>);
  }

  return (
    <div
      className="container h-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      Container
      {dragData}
    </div>
  );
}
