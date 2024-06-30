import { CSSProperties } from "react";
import { Col6 } from "./col6";
import { ComponentType } from "../../types";
export class Col66 implements ComponentType {
    group: string = "layout"
    name: string = "col66"
    icon: string = "columns"
    tag: string = "div"
    className: string = "col-66 columns-2 min-h-10 border-2 border-gray-300 rounded-lg"
    style: CSSProperties = {}
    children: ComponentType[] = [
        new Col6(),
        new Col6(),
    ]
    constructor() {}

    genRenderCode() {
        return `<${this.tag} class="${this.className}">
        ${this.children.map(child => child.genRenderCode()).join('')}
        </${this.tag}>`
    }

    genReactCode() {
        return `<${this.tag} className="${this.className}">
        ${this.children.map(child => child.genReactCode()).join('')}
        </${this.tag}>`
    }
}
