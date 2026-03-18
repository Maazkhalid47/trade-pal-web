import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      <Header />
      <div className="h-screen">
        <Hero />
      </div>
    </main>
  );
}
