"use client";

import React from "react";
import { ComponentType } from "./types";

export function Container(props: any) {
  const [dragData, setDragData] = React.useState<ComponentType[]>([
    {
      component: "Col12", 
      label: "layout",
      className: "col-12", 
      propValue: "propValue", 
      icon: "icon", 
      animations: [""], 
      events: {}, 
      style: {
        top: 0,
        left: 0,
        width: 100,
        color: 'skyblue'
      }, 
    },
  ]);

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text");
    console.log(data);
    setDragData((e) => {
      return [...e, JSON.parse(data)];
    });
  }

  return (
    <div
      className="container h-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      Container12312
      {dragData.map((item, index) => (
        <div key={index} className={item.className} style={item.style}>{item.component}</div>
      ))}
    </div>
  );
}
