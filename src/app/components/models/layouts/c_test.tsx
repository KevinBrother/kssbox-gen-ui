import React from "react";
import { StaticProperties } from "../../types";
import { PageInst } from "../../render/page-inst";

export class CTest extends React.Component {
  render() {
    return <div>c-test</div>;
  }
}

export const ObjTest = {
  group: "layout",
  name: "c-test",
  class: "flex flex-col",
  icon: "columns",
  tag: "div",
  style: {},
  children: [],
};

export function genStyleString(styleMap: { [key in string]: string }) {
  return Object.keys(styleMap)
    .map(
      (key) =>
        `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${styleMap[key]}`
    )
    .join(";");
}

export class CTest2 {
  static tag = "div";
  static group = "layout";
  static icon = "columns";
  static className = "flex flex-col";
  static content = "test";
  static style = {
    color: "red",
    backgroundColor: "yellow",
  };
  static children = [];

  static genReactCode(childReactCode: string) {
    const { tag, className, content, style } = this;
    return `<${tag} className="${className}" style="{${JSON.stringify(style)}">
        ${childReactCode || content} 
    </${tag}>`;
  }

  static genHtmlCode(childHtmlCode: string) {
    const { tag, className, content, style } = this;
    return `<${tag} class="${className}" style="${genStyleString(style)}}">
        ${childHtmlCode || content} 
    </${tag}>`;
  }
}

// console.log(CTest2.genHtmlCode("123"));
// console.log(CTest2.genReactCode("123"));

const models: StaticProperties[] = [CTest2];
console.log(models[0].className);
const page = new PageInst();
