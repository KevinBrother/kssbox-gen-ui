import { CSSProperties } from "react";
import { ComponentType } from "../../types";
import React from "react";

export class Col12 extends React.Component implements ComponentType {
  group: string = "layout";
  name: string = "col12";
  icon: string = "columns";
  tag: string = "div";
  className: string =
    "col-12 columns-12 h-8 border-2 border-gray-300 rounded-lg";
  style: CSSProperties = {};
  children: ComponentType[] = [];

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
    return `<${this.tag} ondragover="${this.handleDragOver}" ondrop=${
      this.handleDrop
    } class="${this.className}">
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
        draggable
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
