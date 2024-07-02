'use client'


import { Aside } from "./components/aside";
import { Container } from "./components/container";
import { CodeEditor } from "./code-editor";
import { globalStore } from "./store";
import { observer } from "mobx-react-lite";

export default observer(() => {
  return (
    <main className="flex min-h-screen">
      <div className="w-40 border-2 border-gray-200">
        <Aside/>
      </div>
      <div className={globalStore.isShowCodeEditor? "w-2/5" : 'flex-1'}>
        <Container/>
      </div>
      <div hidden={!globalStore.isShowCodeEditor} className="w-2/5">
      {/* <CodeEditor /> */}
      </div>
    </main>
  );
})
