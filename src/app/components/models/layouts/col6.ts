import { CSSProperties } from "react";
import { ComponentType } from "../../types";

export class Col6 implements ComponentType {
    group: string = "layout"
    name: string = "col12"
    icon: string = "columns"
    tag: string = "div"
    className: string = "col-6 columns-6 h-8 border-2 border-gray-300 rounded-lg"
    style: CSSProperties = {}
    children: ComponentType[] = []
    constructor() {}

    genRenderCode() {
        return `<${this.tag} class="${this.className}">
        ${this.name}
        ${this.children.map(child => child.genRenderCode()).join('')}
        </${this.tag}>`
    }

    genReactCode() {
        return `<${this.tag} class="${this.className}">
        ${this.name}
        ${this.children.map(child => child.genReactCode()).join('')}
        </${this.tag}>`
    }
}
