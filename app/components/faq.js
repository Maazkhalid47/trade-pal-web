"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Mail } from "lucide-react";


function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);

    const faqs = [
        {
            question: "What is My Trade Pal?",
            answer:
                "My Trade Pal is an app that connects customers looking for work to be completed with local tradespeople looking for jobs.",
        },
        {
            question: "How do I create an account?",
            answer:
                "Create an account using your email address and follow the verification process. We'll send a one-time verification code (OTP) to your email address, which you enter in the app to verify your account.",
        },
        {
            question: "How do I post a job?",
            answer:
                "Customers can create a job by adding a job title, description, budget, address and, where useful, photos showing the work required.",
        },
        {
            question: "How do tradespeople respond to jobs?",
            answer:
                "Tradespeople can send a proposal containing their quote, a message and an estimated timescale for the work.",
        },
        {
            question: "Can I message another user?",
            answer:
                "Yes. My Trade Pal provides in-app messaging so customers and tradespeople can communicate about jobs.",
        },
        {
            question: "Are tradespeople checked by My Trade Pal?",
            answer:
                "At present, My Trade Pal verifies users' email addresses. We do not independently verify a tradesperson's identity, qualifications, accreditations or insurance. Customers should make any checks they consider necessary before agreeing to work.",
        },
        {
            question: "Can tradespeople add insurance information to their profile?",
            answer:
                "Yes. Tradespeople can add information such as their insurance provider, level of cover and expiry date. This information is provided by the tradesperson and is not currently independently verified by My Trade Pal.",
        },
        {
            question: "How do reviews work?",
            answer:
                "Customers can leave a rating or review connected to the relevant job and tradesperson.",
        },
        {
            question: "How do I change my details?",
            answer:
                "You can edit your personal and profile information through the app's settings.",
        },
        {
            question: "Can I delete my account?",
            answer:
                "Yes. You can delete your account from Profile → Delete My Account. You may need to resolve any outstanding job, payment or support request before your account can be deleted.",
        },
    ];

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm overflow-hidden mt-10">

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex text-start justify-between p-6 hover:bg-white/5 transition-colors"
                >
                    <span className="text-2xl font-semibold text-[#000088]">
                        Frequently Asked Questions
                    </span>

                    <ChevronDown
                        size={22}
                        className={`text-black transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {isOpen && (
                    <div className="px-6 pb-6 space-y-5 text-start">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b pb-5 last:border-0">
                                <h3 className="text-base font-semibold text-black mb-2">
                                    {faq.question}
                                </h3>

                                <p className=" leading-relaxed text-[#475569]">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                        <p className="text-base font-semibold text-black" >Can't find what you looking for ?</p>
                        <a href="mailto:info@mytradepal.uk" className="mt- inline-flex items-center gap-2 rounded-xl bg-[#4169E1] px-5 py-3 font-semibold text-white transition hover:bg-[#3157c7]">
                            <Mail className="size-5" aria-hidden="true" />
                            Email us your question
                        </a>
                    </div>
                )}

            </div>
        </div>
    );
}

export default FaqSection;