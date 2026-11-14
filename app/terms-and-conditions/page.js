import { TermsAndConditions } from "../components/terms-and-conditions";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      <Header/>
      <TermsAndConditions />
      <Footer/>
    </div>
  );
}