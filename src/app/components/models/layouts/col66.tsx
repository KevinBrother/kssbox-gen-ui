import { CSSProperties } from "react";
import { Col6 } from "./col6";
import React from "react";
import { ComponentType } from "../../types";
export class Col66 extends React.Component implements ComponentType  {
  group: string = "layout";
  name: string = "col66";
  icon: string = "columns";
  tag: string = "div";
  className: string =
    "col-66 columns-2 min-h-10 border-2 border-gray-300 rounded-lg";
  style: CSSProperties = {};
  children: Col6[] = [
    // new Col6,
    // Col6,
  ];

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
        ${this.children.map((child) => child.genRenderCode()).join("")}
        </${this.tag}>`;
  }

  genReactCode() {
    return `<${this.tag} className="${this.className}">
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
