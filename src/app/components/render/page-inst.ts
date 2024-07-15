import { ModelInst } from "./model-inst";

export class PageInst {
    modelInsts: ModelInst[] = [];
    insertModel(index: number, model: ModelInst) {
        this.modelInsts.splice(index, 0, model);
    }

    removeModel(index: number) {
        this.modelInsts.splice(index, 1);
    }

    moveModel(from: number, to: number) {
        this.modelInsts.splice(to, 0, this.modelInsts.splice(from, 1)[0]);
    }

    getModel(index: number) {
        return this.modelInsts[index];
    }

    genCode() {
        let code = "";
    }
}