import { CSSProperties } from "react";

export interface TransferType {
  renderCode: string;
  reactCode: string;
  ref: string;
}

export interface ComponentTypeProps {
  group: string;
  name: string;
  icon: string;
  tag: string;
  dragImg?: any; // 拖拽时的图形
  className: string;
  style: CSSProperties;
  children: ComponentType[];
}
export abstract class ComponentType {
  group: string;
  name: string;
  icon: string;
  tag: string;
  dragImg?: any; // 拖拽时的图形
  className: string;
  style: CSSProperties;
  children: ComponentType[];

  constructor({
    group,
    name,
    icon,
    tag,
    dragImg,
    className,
    style,
    children,
  }: ComponentTypeProps) {
    this.group = group;
    this.name = name;
    this.icon = icon;
    this.tag = tag;
    this.dragImg = dragImg;
    this.className = className;
    this.style = style;
    this.children = children;
  }

  abstract genReactCode(): string;
  abstract genRenderCode(): string;
  abstract render(): React.JSX.Element;
}


export type SelfComponent = any;

export type ComponentMap = {[key in string]: SelfComponent}