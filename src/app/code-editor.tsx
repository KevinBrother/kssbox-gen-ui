'use client';
import { observer } from 'mobx-react-lite';
import { globalStore } from "./store";

export const CodeEditor = observer(() => {
  return (
    <div>
      
      {globalStore.htmlStrArr.length} 
      <br/>
      {globalStore.htmlStrArr.map((item, index) => {
        return item
      })}
    
    </div>
  );
});
