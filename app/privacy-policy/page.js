import { PrivacyPolicy } from "../components/privacy-policy";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      <PrivacyPolicy />
    </div>
  );
}