'use client';
import { observer } from 'mobx-react-lite';
import { globalStore } from "./store";

export const CodeEditor = observer(() => {
  return (
    <div>
      
      {globalStore.data.length} 
      <br/>
      {globalStore.data.map((item, index) => {
        return `<${item.tag} key={index} style={${item.style}}>{${item.name}}</${item.tag}>`
      })}
    
    </div>
  );
});
