"use client";

import React from "react";
import { globalStore } from "../store";
import { TransferType } from "./types";
import { CTest } from "./models/layouts/c_test";
import { componentMap } from "./aside";

export function Container(props: any) {
  const [componentRef, setComponentRef] = React.useState<string[]>([]);
  const [renderCodeArr, setRenderCodeArr] = React.useState<string[]>([]);
  const [reactCodeArr, setReactCodeArr] = React.useState<string[]>([]);

  React.useEffect(() => {
    globalStore.setHTMLs(reactCodeArr);
  }, [reactCodeArr]);

  React.useEffect(() => {
    setRenderCodeArr(['<div class="bg-blue-500 p-2">default<div>']);
    setReactCodeArr(['<div className="bg-blue-500 p-2">default<div>']);
  }, []);

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text");
    console.log(data);

    try {
      const parsedData: TransferType = JSON.parse(data);
      setRenderCodeArr((e) => {
        return [...e, parsedData.renderCode];
      });
      setReactCodeArr((e) => {
        return [...e, parsedData.reactCode];
      });
      setComponentRef((e) => {
        return [...e, parsedData.ref];
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="h-full w-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      Container12312
      {renderCodeArr.map((htmlStr, index) => (
        <div
          className="box bg-gray-200 p-2 m-2"
          key={index}
          dangerouslySetInnerHTML={{ __html: htmlStr }}
        ></div>
      ))}

      <CTest/>
      {componentRef.map((ref) => {
        const CurComponent = componentMap[ref];

        return <CurComponent key={Math.random()}/>;
      })}
    </div>
  );
}
