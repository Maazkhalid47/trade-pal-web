import Hero from "./components/hero";
import Header from "./components/header";
import Card from "./components/card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="!bg-[#F8FAFC] ">
        <div className="w-full flex justify-center relative">
          <Hero />
          <Card className="flex flex-col justify-center text-center items-center gap-2 h-[160px] w-[400px] md:w-[1200px] mx-auto absolute bottom-[-80px] ">
            <div>
              <p className="text-[#4169E1] text-[28px] font-semibold inline">
                Built for
              </p>
              <p className="text-[#4169E1] text-[28px] font-bold inline">
                {" "}
                Both Sides
              </p>
            </div>
            <p className="text-black text-[18px]">
              Whatever your goal, My Trade Pal simplifies the process.
            </p>
          </Card>
        </div>
        <div className="!bg-[#F8FAFC] flex flex-col justify-center text-center pt-40 pb-20">
          <Card className="flex flex-col justify-center text-center items-center gap-2 w-[400px]">
            <Image src="/house.png" alt="house" height={64} width={64} />
            <p className="font-semibold inline">For Homeowners</p>
            <ul>
              <li>Find qualified professionals</li>
              <li>Compare prices and reviews</li>
              <li>Manage your projects efficiently</li>
            </ul>
          </Card>
          <Card className="flex flex-col justify-center text-center items-center gap-2 w-[400px]">
            <Image src="/house.png" alt="house" height={64} width={64} />
            <p className="font-semibold inline">For Homeowners</p>
            <ul>
              <li>Find qualified professionals</li>
              <li>Compare prices and reviews</li>
              <li>Manage your projects efficiently</li>
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
