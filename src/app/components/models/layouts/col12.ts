import { CSSProperties } from "react";
import { ComponentType } from "../../types";

export class Col12 implements ComponentType {
    group: string = "layout"
    name: string = "col12"
    icon: string = "columns"
    tag: string = "div"
    className: string = "col-12 columns-12 h-8 border-2 border-gray-300 rounded-lg"
    style: CSSProperties = {}
    children: ComponentType[] = []
    constructor() {}

    genCode() {
        return `<${this.tag} class="${this.className}">
        ${this.name}
        ${this.children.map(child => child.genCode()).join('')}
        </${this.tag}>`
    }
}
