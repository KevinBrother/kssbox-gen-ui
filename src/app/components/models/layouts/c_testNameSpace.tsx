import React from "react";
import { StaticProperties } from "../../types";
import { PageInst } from "../../render/page-inst";

export class CTest extends React.Component {
  static tag = ""; // div'
  static componentName? = ""; // use function name
  static group = ""; // layout
  static icon = ""; // columns
  static className = ""; // flex flex-col
  static content = ""; // test
  static style: React.CSSProperties = {};
  static children: StaticProperties[] = [];

  static genReactCode(childReactCode?: string) {
    return "";
  }

  static genHtmlCode(childHtmlCode?: string) {
    return "";
  }

  render() {
    return <div>c-test</div>;
  }
}

export const ObjTest: StaticProperties = {
  group: "layout",
  componentName: "c-test",
  className: "flex flex-col",
  icon: "columns",
  content: "",
  tag: "div",
  style: {},
  children: [],
  genReactCode: (childReactCode: string) => {
    return "";
  },

  genHtmlCode: (childHtmlCode: string) => {
    return "";
  },
};

const models: StaticProperties[] = [CTest, ObjTest];

// models[0].genHtmlCode("123");

models.map((model) => {
  model.genHtmlCode("123");
});

const page = new PageInst();
