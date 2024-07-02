import { CSSProperties } from "react";
import { ComponentType } from "../../types";
import React from "react";

export class Col6 extends React.Component implements ComponentType {
  group: string = "layout";
  name: string = "col6";
  icon: string = "columns";
  tag: string = "div";
  className: string = "col-6 columns-6 h-8 border-2 border-gray-300 rounded-lg";
  style: CSSProperties = {};
  children: ComponentType[] = [];

  // constructor() {
  //     super({
  //       group: "layout",
  //       name: "col6",
  //       icon: "columns",
  //       tag: "div",
  //       className: "col-6 columns-6 h-8 border-2 border-gray-300 rounded-lg",
  //       style: {},
  //       children: [],
  //     });
  //   }

  handleDragOver(e: any) {
    e.preventDefault();
  }

  handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text");
    console.log(data);
  }

  genRenderCode() {
    return `<${this.tag} class="${this.className}">
        ${this.name}
        ${this.children.map((child) => child.genRenderCode()).join("")}
        </${this.tag}>`;
  }

  genReactCode() {
    return `<${this.tag} className="${this.className}">
        ${this.name}
        ${this.children.map((child) => child.genReactCode()).join("")}
        </${this.tag}>`;
  }

  render() {
    return (
      <div
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        className={this.className}
      >
        {this.name}
        {this.children.map((child) => child.genRenderCode()).join("")}
      </div>
    );
  }
}
