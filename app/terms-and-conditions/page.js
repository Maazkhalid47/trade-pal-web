import { TermsAndConditions } from "../components/terms-and-conditions";

export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      <TermsAndConditions />
    </div>
  );
}