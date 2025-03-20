"use client";

import Works from "./portfolio";

export default function PortfolioSection() {
    return (
        <div className="lg:px-[100px] lg:py-[70px] md:px-[50px] sm:px-[24px] xsm:px-[24px] py-[30px]">
            <div className="flex flex-col items-center justify-center lg:gap-8 md:gap-6 xsm:gap-6 sm:gap-6">
                <h2 className="text-violet font-bold lg:text-2xl md:text-2xl sm:text-2xl xsm:text-xl font-sans">Explore our investment portfolio and start your dream life</h2>

                <div>
                    <Works />
                </div>
            </div>
        </div>
    )
}