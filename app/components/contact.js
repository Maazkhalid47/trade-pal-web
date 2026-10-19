import React from 'react'
import Card from "./card";
import Pill from "./pill";

function Contact() {
    return (
        <div className="pb-20" id="contact">
            <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[330px] md:w-[700px] lg:w-[1000px] mx-auto">
                <div className="space-y-2 md:space-y-4">
                    <Pill
                        text="WE'RE HERE TO HELP"
                        className="bg-[#00B3B3]/10"
                        textClass="text-[#4169E1]"
                        icon="/green-dot.svg"
                        iconHeight={8}
                        iconWidth={8}
                    />
                    <p className="text-black text-[28px] font-bold">Contact Us</p>
                </div>
                <div>
                    <p className='text-[#475569] md:text-start'>
                        Questions about a job, a quote, your account or payments? The My Trade Pal team is happy to help, whether you're a homeowner or a tradesperson.
                    </p>
                    <div className='pt-8 text-start justify-between text-black'>
                        <p className='font-semibold text-xl'>Email</p>

                        <a className='hover:text-[#4169E1] hover:font-semibold' href="mailto:info@mytradepal.uk">
                            info@mytradepal.uk</a>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default Contact
