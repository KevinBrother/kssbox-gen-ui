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

export type ComponentMap = { [key in string]: SelfComponent };

class StaticModel {
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
}

type StaticProps = typeof StaticModel;

type AllStaticProperties = { [K in keyof StaticProps]: StaticProps[K] }

// 获取全部静态属性的类型, 不包含 原型对象
export type StaticProperties = Omit<AllStaticProperties, "prototype">;
