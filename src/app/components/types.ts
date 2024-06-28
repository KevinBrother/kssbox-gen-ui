import { CSSProperties } from "react"


export interface ComponentType {
    group: string
    name: string
    icon: string
    tag: string
    className: string
    style: CSSProperties
    children: ComponentType[]
    genCode(): string
}