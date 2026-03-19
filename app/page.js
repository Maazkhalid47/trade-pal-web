import Hero from "./components/hero";
import Header from "./components/header";
import Card from "./components/card";
import Image from "next/image";
import PrimaryButton from "./components/primary_button";
import Pill from "./components/pill";
import IconCard from "./components/icon_card";
import SecondaryButton from "./components/secondary_button";
import Footer from "./components/footer";

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
            <p className="text-black text-[18px]">
              Whatever your goal, My Trade Pal simplifies the process.
            </p>
          </Card>
        </div>
        <div className="!bg-[#F8FAFC] flex md:flex-row flex-col justify-center gap-10 text-center pt-40 pb-20">
          <Card className="flex flex-col justify-center text-center items-start gap-5 p-10 w-[400px] md:w-[500px] md:mx-0 mx-auto">
            <Image src="/house.png" alt="house" height={64} width={64} />
            <p className="font-semibold text-[#0F172A]">For Homeowners</p>
            <ul className="flex flex-col items-start gap-2">
              <li className="flex items-center gap-2 text-black text-[14px]">
                <img src="/tick-blue.svg" className="w-4 h-4" />
                Get free, no-obligation quotes from local trades
              </li>
              <li className="flex items-center gap-2 text-black text-[14px]">
                <img src="/tick-blue.svg" className="w-4 h-4" />
                Only browse verified tradespeople with reviews
              </li>
              <li className="flex items-center gap-2 text-black text-[14px]">
                <img src="/tick-blue.svg" className="w-4 h-4" />
                Direct chat to manage bookings in one place
              </li>
            </ul>
            <div className="flex justify-center w-full">
              <PrimaryButton
                text="Get Free Quotes"
                className="rounded-3xl! w-[300px] flex justify-center"
              />
            </div>
          </Card>
          <Card className="flex flex-col justify-center text-center items-start gap-5 p-10 w-[400px] md:w-[500px] !bg-transparent border border-[#00B3B333] md:mx-0 mx-auto">
            <Image src="/wrench.png" alt="house" height={64} width={64} />
            <p className="font-semibold text-[#0F172A]">For Tradespeople</p>
            <ul className="flex flex-col items-start gap-2">
              <li className="flex items-center gap-2 text-black text-[14px]">
                <img src="/tick-green.svg" className="w-4 h-4" />
                Access steady stream of local jobs daily
              </li>
              <li className="flex items-center gap-2 text-black text-[14px]">
                <img src="/tick-green.svg" className="w-4 h-4" />
                Choose which jobs to respond to - no pressure
              </li>
              <li className="flex items-center gap-2 text-black text-[14px]">
                <img src="/tick-green.svg" className="w-4 h-4" />
                Pay only £7.99 when your quote is accepted
              </li>
            </ul>
            <div className="flex justify-center w-full">
              <PrimaryButton
                text="Find Local Jobs"
                className="rounded-3xl! !bg-[#02C6C6F2] w-[300px] flex justify-center"
              />
            </div>
          </Card>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20">
          <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] mx-auto">
            <div className="flex gap-2">
              {" "}
              <p className="text-black text-[28px]">How It Works for</p>
              <p className="text-[#4169E1] text-[28px] font-semibold">
                Homeowners
              </p>
            </div>
            <p className="relative text-black pt-3 text-center">
              Simple steps for Homeowners
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-[#4169E1]"></span>
            </p>
            <div className="flex justify-end w-full">
              <Pill
                text="Customer Journey"
                className="bg-[#00008A1A]"
                textClass="text-[#4169E1]"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/homeowners-1.png"
                  alt="img-1"
                  color="#4169E1"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  1. Post a Job
                </p>
                <p className="text-black">
                  Describe the work, budget, and location.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/homeowners-2.png"
                  alt="img-3"
                  color="#4169E1"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  2. Receive Applications
                </p>
                <p className="text-black">
                  Skilled tradespeople express interest.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/homeowners-3.png"
                  alt="img-4"
                  color="#4169E1"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  3. Compare & Chat
                </p>
                <p className="text-black">
                  Reviews, profiles, message them,and request quotes.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/homeowners-4.png"
                  alt="img-4"
                  color="#4169E1"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  4. Hire & Get It Done
                </p>
                <p className="text-black">
                  Choose the best fit and get your job completed.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20">
          <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] !bg-transparent mx-auto">
            <div className="flex gap-2">
              {" "}
              <p className="text-black text-[28px]">How It Works for</p>
              <p className="text-[#02C6C6F2] text-[28px] font-semibold">
                Trades
              </p>
            </div>
            <p className="relative text-black pt-3 text-center">
              Streamlined process for Tradespeople
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-[#02C6C6F2]"></span>
            </p>
            <div className="flex justify-end w-full">
              <Pill
                icon="/cash.svg"
                text="£7.99 charged only when accepted"
                className="bg-[#02C6C61A]"
                textClass="text-[#02C6C6F2]"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/trades-1.png"
                  alt="img-1"
                  color="#02C6C6F2"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  1. Browse Jobs
                </p>
                <p className="text-black">Find jobs that match your skills.</p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/trades-2.png"
                  alt="img-3"
                  color="#02C6C6F2"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  2. Apply for Work
                </p>
                <p className="text-black">
                  Submit your interest to the customer.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/trades-3.png"
                  alt="img-4"
                  color="#02C6C6F2"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  3. Chat & Quote
                </p>
                <p className="text-black">
                  Discuss details and provide your price.
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <IconCard
                  src="/trades-4.png"
                  alt="img-4"
                  color="#02C6C6F2"
                  height={18}
                  width={18}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  4. Complete the Job & Get Paid
                </p>
                <p className="text-black">
                  Deliver great work and grow your reputation.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20">
          <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] mx-auto">
            <div className="flex gap-2">
              {" "}
              <p className="text-[#000088] text-[28px]">Why Choose</p>
              <p className="text-[#000088] text-[28px] font-semibold">
                TradersLounge?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div
                className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D]"
              >
                <IconCard
                  src="/access.png"
                  alt="img-1"
                  color="#fff"
                  height={50}
                  width={50}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Direct Access to Real Opportunities
                </p>
                <p className="text-black">
                  No middlemen. Connect directly with customers or tradespeople
                  in your area.
                </p>
              </div>
              <div
                className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D]"
              >
                <IconCard
                  src="/chat.png"
                  alt="img-3"
                  color="#fff"
                  height={50}
                  width={50}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Faster Hiring, Less Hassle
                </p>
                <p className="text-black">
                  Post once, receive applications, compare, and hire — all in
                  minutes.
                </p>
              </div>
              <div
                className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D]"
              >
                <IconCard
                  src="/money.png"
                  alt="img-4"
                  color="#fff"
                  height={50}
                  width={50}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  {" "}
                  Professional Profiles That Build Trust
                </p>
                <p className="text-black">
                  Showcase your skills, qualifications, and experience.
                </p>
              </div>
              <div
                className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D]"
              >
                <IconCard
                  src="/location.png"
                  alt="img-4"
                  color="#fff"
                  height={50}
                  width={50}
                />
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Secure Payments (Coming Soon)
                </p>
                <p className="text-black">
                  Find work or help right in your own neighborhood.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 text-center pb-20 px-5 mx-auto">
          <div className="flex flex-row justify-center gap-10 md:gap-20 items-center max-w-[1200px] w-full mx-auto">
            <div className="flex flex-col gap-1 items-center">
              <Image src="/ratings.png" alt="ratings" width={120} height={30} />
              <p className="text-[#000088] font-semibold">
                4.9/5 Average Rating
              </p>
              <p className="text-[#64748B]">From our early beta users</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              {" "}
              <Pill
                icon="/shield.png"
                className="bg-[#00008A0D] !p-5"
                text="Secure Stripe Payments"
                textClass="text-[#000088]"
              />
              <p className="text-[#64748B] pt-2">Industry leading encryption</p>
            </div>
          </div>
          <div className="bg-[#02C6C60D] rounded-3xl p-8 md:w-[600px] w-[400px] relative">
            <p className="text-[80px] text-[#00008A33] absolute top-[-40px]">
              ”
            </p>
            <p className="text-[#475569]">
              "My Trade Pal helped me find a plumber in 20 minutes on a Sunday
              afternoon. The chat was seamless and the payment was secure.
              Couldn't recommend it enough!"
            </p>
            <p className="text-[#00008A] font-semibold pt-2">
              — Sarah J., Homeowner in Birmingham
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20">
          <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 md:p-20 w-[400px] md:w-[1200px] mx-auto !bg-[#4169E1]">
            <p className="text-[48px] font-bold">
              Be the First to Try My Trade Pal
            </p>
            <p>
              Join our early access list and get notified when we launch in your
              area. No spam, just updates.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                className="bg-white p-3 rounded-xl text-black w-[300px] md:text-left text-center"
                placeholder="Enter your email"
              ></input>
              <SecondaryButton
                text="Join Early Access"
                className="rounded-xl!"
              />
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
