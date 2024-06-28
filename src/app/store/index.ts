import { makeAutoObservable } from "mobx";
import { ComponentType } from "../components/types";

class GlobalStore {
    isShowCodeEditor = false; // 是否显示代码
    data: ComponentType[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setComponents(data: ComponentType[]) {
        this.data = data;
    }

    toggleCodeEditor() {
        console.log("toggleCodeEditor", this.isShowCodeEditor );
        this.isShowCodeEditor =!this.isShowCodeEditor;
    }
}
export const globalStore = new GlobalStore();