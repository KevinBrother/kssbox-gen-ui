import { CSSProperties } from "react"

export interface TransferType {
    renderCode: string
    reactCode: string
}
export interface ComponentType {
    group: string
    name: string
    icon: string
    tag: string
    className: string
    style: CSSProperties
    children: ComponentType[]
    genRenderCode(): string
    genReactCode(): string
}