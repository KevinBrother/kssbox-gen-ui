import { CSSProperties } from "react";
import { Col6 } from "./col6";
import { ComponentType } from "../../types";
export class Col66 implements ComponentType {
    group: string = "layout"
    name: string = "col66"
    icon: string = "columns"
    tag: string = "div"
    className: string = "col-66 columns-12 min-h-10 border-2 border-gray-300 rounded-lg"
    style: CSSProperties = {}
    children: ComponentType[] = [
        new Col6(),
        new Col6(),
    ]
    constructor() {}

    genCode() {
        return `<${this.tag} className="${this.className}">
        ${this.name}
        ${this.children.map(child => child.genCode()).join('')}
        </${this.tag}>`
    }
}
