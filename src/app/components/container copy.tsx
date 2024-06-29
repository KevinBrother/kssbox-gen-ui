"use client";

import React, { ReactNode } from "react";
import { ComponentType } from "./types";
import { globalStore } from "../store";

export function Container(props: any) {
  const [dragData, setDragData] = React.useState<ComponentType[]>([
    {
      group: 'default',
      name: 'default',
      icon: 'div',
      tag: 'div',
      className: 'border-2 border-dashed border-gray-300 rounded-lg',
      style: {
        backgroundColor: 'red'
      },
      children: [],
      genCode() {
        return `<div></div>`;
      }
    }
  ]);

  React.useEffect(() => {
    // globalStore.setComponents(dragData)
  }, [dragData]);

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text");
    const rst = JSON.parse(data);
    console.log(rst);

    setDragData((e) => {
      return [...e, rst];
    });
  }

  return (
    <div
      className="h-full w-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      Container12312
      {dragData.map(({children, ...item}, index) => (
        // @ts-ignore
       <item.tag key={index} {...item} >
        {children.map((child, j) => (
          // <div key={j}>12</div>
          <child.tag key={j} {...child} />
        ))}
        {/* {
          <div>123123</div>
        } */}
       </item.tag>
      ))}
    </div>
  );
}
