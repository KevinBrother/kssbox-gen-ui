import { makeAutoObservable } from "mobx";

class GlobalStore {
    isShowCodeEditor = false; // 是否显示代码
    htmlStrArr: string[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setComponents(htmlStrArr: string[]) {
        this.htmlStrArr = htmlStrArr;
    }

    toggleCodeEditor() {
        console.log("toggleCodeEditor", this.isShowCodeEditor );
        this.isShowCodeEditor =!this.isShowCodeEditor;
    }
}
export const globalStore = new GlobalStore();