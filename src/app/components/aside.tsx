"use client";

import { ComponentMap, SelfComponent, TransferType } from "./types";
import { Col12} from "./models/layouts/col12";
import { Col66 } from "./models/layouts/col66";
import { Button } from "./models/layouts/button";
import { CTest } from "./models/layouts/c_test";

// 多态，只要类，不要实例
const models: SelfComponent[] = [ Col12,  Col66,  Button, CTest]

const menus = models.map(model => ({ref: model.name, model}))

export const componentMap: ComponentMap = {};

models.forEach(model => {
  componentMap[model.name] = model;
});

export function Aside() {
  // function handleStagStart(e: any, component: React.Component) {
  function handleStagStart(e: any, ref: string) {
   
    // const reactCode = component.genReactCode();
    // const renderCode = component.genRenderCode();
    const reactCode = '<div>123</div>';
    const renderCode = '<div>123</div>';
    const transferData:TransferType = { reactCode, renderCode , ref};
    
    e.dataTransfer.setData("text", JSON.stringify(transferData));
  }

  return (
    <div className="aside">
      {menus.map(({ref, model}, index) => (
        <div key={index} className="flex justify-between p-4" draggable onDragStart={(e) =>handleStagStart(e, ref)}>
          <div>{model.name}</div>
          {model}
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



