"use client";

import Image from "next/image";
import image from "@/asset/images/calculateimage.svg"
import CalculateSection from "./calc-section";

export default function CalculatorSection() {
    return (
        <section className="xsm:px-6">
            <div>
                <div className="text-center">
                    <h1 className="text-center text-violet font-bold text-2xl py-5">Let&apos;s calculate your Dream Investment</h1>
                    <p className="text-violet">See what your potential returns on your investment look like</p>
                </div>
                <div className="md:flex md:flex-row items-center pb-6 pt-10 sm:flex-col">
                    <div className="grow">
                        <CalculateSection />
                    </div>
                    <div className="grow">
                        <Image src={image} alt="image2" className="w-56" />
                    </div>
                    <div className="flex items-start grow">
                        <div className="bg-light-violet flex flex-col items-start gap-5 p-6">
                            <p>Total investment</p>
                            <p>Duration</p>
                            <p>Rate of returns</p>
                            <p>Expected earnings</p>
                            <p>Gains</p>
                        </div>
                        <div className="flex flex-col items-start gap-5 p-6 bg-light-green drop-shadow-md drop-shadow-shadow">
                            <p>$5,000,000</p>
                            <p>36 months (3 years)</p>
                            <p>12.5%</p>
                            <p>$7,119,140.63</p>
                            <p>$2,119,140.63</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}