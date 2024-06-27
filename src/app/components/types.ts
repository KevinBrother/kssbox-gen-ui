import { CSSProperties } from "react"

export interface ComponentType {
    component: 'Col12' | 'Col66', // 组件名称
    label: 'layout' | 'component', 
    className: string
    propValue: string, // 组件所使用的值
    icon: string // 'BorderOuterOutlined', // 左侧组件列表中显示的 icon 图标
    animations: [any], // 动画列表
    events: {}, // 事件列表
    style: CSSProperties // 组件样式
}