import Header from "../components/header";
import Footer from "../components/footer";
import DeleteAccount from "../components/delete-account";

export const metadata = {
  title: "Delete Your Account",
  description: "How to delete your My Trade Pal account and personal data.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <DeleteAccount />
      <Footer />
    </>
  );
}
