"use client";

import React from "react";
import { globalStore } from "../store";

export function Container(props: any) {
  const [dragData, setDragData] = React.useState<string[]>([
    '<div className="bg-blue-500">default<div>'
  ]);

  React.useEffect(() => {
    globalStore.setComponents(dragData)
  }, [dragData]);

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text");
    console.log(data);

    setDragData((e) => {
      return [...e, data];
    });
  }

  return (
    <div
      className="h-full w-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      Container12312
      {dragData.map((htmlStr, index) => (
        <div className="box bg-gray-200 p-2 m-2" key={index} dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
      ))}
    </div>
  );
}
