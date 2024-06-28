import Image from "next/image";
import { Aside } from "./components/aside";
import { Container } from "./components/container";
import { CodeEditor } from "./code-editor";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-40 border-2 border-gray-200">
        <Aside/>
      </div>
      <div className="w-2/5">
        <Container/>
      </div>
      <div className="w-2/5">
      <CodeEditor />
      </div>
    </main>
  );
}
