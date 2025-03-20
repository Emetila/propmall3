"use client";

import Image from "next/image";
import image from "@/asset/calcimage.svg";

export default function IntroSection() {
    return (
        <section className="lg:px-10 md:px-10 xsm:px-4 sm:px-4 lg:pb-16 lg:py-0 md:py-0 xsm:py-10 sm:py-10">
            {/* Desktop version */}
            <div className="flex justify-center lg:flex-row md:flex-row xsm:flex-col-reverse xsm:gap-6 sm:gap-6 sm:flex-col-reverse items-center">
                <div className="lg:w-1/2 md:w-1/2 xsm:w-full sm:w-full">
                    <Image src={image} alt="image" />
                </div>

                <div className="lg:w-1/2 md:w-1/2 xsm:w-full sm:w-full">
                    <h1 className="text-violet font-bold lg:text-2xl md:text-2xl sm:text-2xl xsm:text-xl font-sans lg:pl-24 md:pl-0 xsm:pl-0 sm:pl-0">A portfolio to match your financial goals. We are here to guide you all the way!</h1>
                </div>
            </div>
        </section>
    )
}