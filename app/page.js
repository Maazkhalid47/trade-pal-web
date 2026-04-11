import Hero from "./components/hero";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import HomeOwners from "./components/homeowners";
import Trades from "./components/trades";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Subscribe from "./components/subscribe";
import Mission from "./components/mission";
import AboutUs from "./components/about-us";

export const metadata = {
  title: "Home | My Trade Pal",
};

export default function Home() {
  return (
    <main>
      <Header />
      <div className="!bg-[#F8FAFC]">
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
            <p className="text-[#475569] text-[18px]">
              Whatever your goal, My Trade Pal simplifies the process.
            </p>
          </Card>
        </div>
        <HomeOwners />
        <Trades />
        <Features />
        <AboutUs />
        <Mission />
        <Testimonials />
        <Subscribe />
      </div>
      <Footer />
    </main>
  );
}
