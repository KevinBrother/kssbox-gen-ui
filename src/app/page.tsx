import Image from "next/image";
import { Aside } from "./components/aside";
import { Container } from "./components/container";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-40 border-2 border-gray-200">
        <Aside/>
      </div>
      <div className="flex-1">
        <Container/>
      </div>
    </main>
  );
}
