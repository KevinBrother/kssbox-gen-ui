import { CSSProperties } from "react";
import { ComponentType } from "../../types";

export class Button implements ComponentType {
    group: string = "component"
    name: string = "button"
    icon: string = "button"
    tag: string = "button"
    className: string = "pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
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
        return `<${this.tag} className="${this.className}">
        ${this.name}
        ${this.children.map(child => child.genReactCode()).join('')}
        </${this.tag}>`
    }
}
