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
import BothSides from "./components/both-sides";

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
         <BothSides />
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
