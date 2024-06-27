"use client";
import { Col12 } from "./layouts/col12";
import { Col66 } from "./layouts/col66";

export function Aside() {
  function handleStagStart(e: any) {
    e.dataTransfer.setData("text", e.target.id + " " + e.clientX + " " + e.clientY);
  }


  return (
    <div className="aside">
      <div className="flex justify-between p-4" draggable onDragStart={handleStagStart}>
        <Col12 />
        <button
          onClick={() => {
            alert("拖动");
          }}
        >
          拖动
        </button>
      </div>
      <div className="flex justify-between p-4" draggable onDragStart={handleStagStart}>
        <Col66 />
        <button
          onClick={() => {
            alert("拖动");
          }}
        >
          拖动
        </button>
      </div>
    </div>
  );
}
