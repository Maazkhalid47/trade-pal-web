import Image from "next/image";
import LinkButton from "./link_button";

export const FormSubmitSuccess = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <section className="text-center w-full">
        <div
          className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url(/success.jpg)",
          }}
        >
          <div className="w-[400px] bg-white shadow-[#E5E7EB80] px-10 py-20 rounded-2xl">
            <div className="flex flex-col gap-4 items-center pb-10">
              <div
                className="border rounded-full p-5"
                style={{
                  background:
                    "linear-gradient(90deg, #4169E114 8%, #02C6C614 8%)",
                }}
              >
                <Image src={"/tick.svg"} width={20} height={20} alt="success" />
              </div>

              <p className="text-[36px] text-[#111827] font-bold">
                You're on the{" "}
                <span className="bg-gradient-to-r from-[#4169E1] to-[#02C6C6] bg-clip-text text-transparent">
                  list
                </span>!
              </p>

              <p className="text-[#6B7280]">
                Thanks for signing up. We'll notify you at launch.
              </p>
            </div>

            <LinkButton
              text="Back to home"
              linkClass="w-full"
              className="w-full flex justify-center !bg-gradient-to-r !from-[#4169E1] !to-[#02C6C6]"
              href={"/"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
