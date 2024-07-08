"use client";
import { observer } from "mobx-react-lite";
import { globalStore } from "../store";

import Editor from "@monaco-editor/react";

export const CodeEditor = observer(() => {
  /*   function handleEditorChange(value, event) {
    // here is the current value
  }

  function handleEditorDidMount(editor, monaco) {
    console.log('onMount: the editor instance:', editor);
    console.log('onMount: the monaco instance:', monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log('beforeMount: the monaco instance:', monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  } */

  return (
    <div>
      {globalStore.htmlStrArr.length}
      <br />
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="html"
        value={globalStore.htmlStrArr
          .map((item, index) => {
            return item;
          })
          .join("")}
        // onChange={handleEditorChange}
        // onMount={handleEditorDidMount}
        // beforeMount={handleEditorWillMount}
        // onValidate={handleEditorValidation}
      />
    </div>
  );
});
