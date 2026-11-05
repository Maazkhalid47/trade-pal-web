"use client";
import { Mail } from "lucide-react";
import FaqSection from "../components/faq";
import React from 'react'
import SecondaryButton from "./secondary_button";

const deletionMailto =
  "mailto:info@mytradepal.uk?subject=Support%20request&body=Full%20name%3A%20%0ARegistered%20email%3A%0AAccount%20type%20(Homeowner%20or%20Tradesperson)%3A%20%0ADescription%20of%20the%20issue%3A%20"


function Support() {
    return (
        <div className='bg-[#F8FAFC] flex flex-col text-black items-center text-center min-h-screen '>

           <div className="lg:w-200 text-start space-y-10">
             <h1 className="pt-16 text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">My Trade Pal Support</h1>
            <p className="leading-relaxed text-[#475569] text-lg">Need help with your My Trade Pal account? We're here to assist both homeowners and tradespeople with any questions or issues they may encounter while using our platform.</p>
           </div>

            <hr/>

            <FaqSection/>

{/* -------------------------------------------------------------------- */}

            <div className="lg:w-200 mt-10 text-start space-y-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm ">
                <h2 className="text-2xl font-bold leading-tight text-[#000088] md:text-3xl">How can we help?</h2>
                <p className="leading-relaxed text-[#475569] text-lg">Whether you're hiring a tradesperson or looking for new job opportunities, our support team can help with:</p>
                <ul className="list-decimal list-inside space-y-2">
                    <li>Account registration and login issues.</li>
                    <li>Finding jobs and submitting quotes.</li>
                    <li>Managing your profile and account details.</li>
                    <li>Payments, transactions and payouts.</li>
                    <li>Messaging and communication issues.</li>
                    <li>Technical problems or reporting bugs.</li>
                </ul>
            </div>

            {/* ----------------------------------------------------- */}
            
            <div className="lg:w-200 mt-10 text-start space-y-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-bold leading-tight text-[#000088] md:text-3xl">Contact Support</h2>
                <p className="leading-relaxed text-[#475569] text-lg">If you're experiencing an issue or need assistance, please contact our team by email.</p>
                
                <a href={deletionMailto} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#4169E1] px-5 py-3 font-semibold text-white transition hover:bg-[#3157c7]">
                <Mail className="size-5" aria-hidden="true" />
                Email a support request
                </a>
                
                <p className="leading-relaxed text-[#475569] text-lg">When contacting us, please include</p>
                <ul className="list-decimal list-inside space-y-2">
                    <li>Your full name.</li>
                    <li>Email address registered to your account.</li>
                    <li>Whether you're a homeowner or tradesperson.</li>
                    <li>A brief description of the issue</li>
                </ul>
                <p className="leading-relaxed text-[#475569] text-lg" >This information will help us understand your request and assist you more effectively.</p>
            </div>

            <div className="lg:w-200 mt-10 text-start space-y-3 mb-10 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <h2 className="text-2xl font-bold leading-tight text-[#000088] md:text-3xl">Need further information?</h2>
                <p className="leading-relaxed text-[#475569] text-lg">For information about how we handle your personal data, please visit our <a className="text-[#000088] underline" href="/privacy-policy">privacy policy</a>.</p>
            </div>

        </div>
    )
}

export default Support
