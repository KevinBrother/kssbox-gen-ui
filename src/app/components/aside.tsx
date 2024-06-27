"use client";
import { Col12 } from "./layouts/col12";
import { Col66 } from "./layouts/col66";

export function Aside() {
  function handleStagStart(e: any, component: string) {
    e.dataTransfer.setData("text", JSON.stringify(
      {
        component, 
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
    }));
  }


  return (
    <div className="aside">
      <div className="flex justify-between p-4" draggable onDragStart={(e) =>handleStagStart(e, 'col12')}>
        <Col12 />
        <button
          onClick={() => {
            alert("拖动");
          }}
        >
          拖动
        </button>
      </div>
      <div className="flex justify-between p-4" draggable onDragStart={(e) =>handleStagStart(e, 'col66')}>
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
