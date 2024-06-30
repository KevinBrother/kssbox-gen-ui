"use client";
// import { Col12 } from "./layouts/col12";
// import { Col66 } from "./layouts/col66";
import { ComponentType } from "./types";
import { Col12} from "./models/layouts/col12";
import { Col66 } from "./models/layouts/col66";
import { Button } from "./models/layouts/button";

const models = [new Col12(), new Col66(), new Button()]

export function Aside() {
  function handleStagStart(e: any, component: ComponentType) {
   
    const code = component.genCode();
    e.dataTransfer.setData("text", code);
  }


  return (
    <div className="aside">
      {models.map((model, index) => (
        <div key={index} className="flex justify-between p-4" draggable onDragStart={(e) =>handleStagStart(e, model)}>
          <div>{model.name}</div>
          <button
            onClick={() => {
              alert("拖动");
            }}
          >
            拖动
          </button>
        </div>
      )) }

    </div>
  );
}
