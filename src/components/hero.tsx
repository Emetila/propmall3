"use client"

import Image from "next/image";
// import image from "@/asset/images/hero-background.svg";
import image1 from "@/asset/images/real estate2.jpg";
import image2 from "@/asset/images/real-estate3.jpg";
import image3 from "@/asset/images/real-estate6.jpg";
import image4 from "@/asset/images/real-estate7.jpg";
import image5 from "@/asset/images/real-estate9.jpg";
import image6 from "@/asset/images/real-estate10.jpg";
// import { TbSeeding } from "react-icons/tb";
import { Button } from "./ui/button";
import { FaApple } from "react-icons/fa";
import playStore from "@/asset/icon/playstore.png"
// import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const components: { title: string; description: string }[] = [
    {
        title: "105",
        description:
            "Property investments",
    },
    {
        title: "265+",
        description:
            "Investment portfolio",
    },
    {
        title: "16",
        description:
            "Trusted partners",
    },
    {
        title: "2038+",
        description:
            "Growing investors",
    },
]

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
]

export default function HeroSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <section className="lg:h-[100vh] md:h-auto xsm:h-auto sm:h-auto bg-light-white flex lg:flex-row md:flex-row sm:flex-col xsm:flex-col justify-between items-start gap-2 lg:pt-10 md:pt-10 xsm:py-3">
            <div className="w-full">
                <div className="flex flex-col gap-4 md:px-10 sm:px-10 xsm:px-5 font-[Open Sans] justify-center items-start p-[30px]">
                    <h1 className="md:text-[32px] font-[Opens_Sans] lg:text-[48px] sm:text-[32px] xsm:text-[28px] text-dark-green">Secure your future with smart real estate investment choices</h1>
                    <p className="text-dark-violet xsm:text-[18px] leading-[24px]">We find hidden gems with explosive growth potential so you can watch your wealth grow. Your financial security starts here.</p>
                    <div className="flex lg:flex-row md:flex-row xsm:flex-col sm:flex-col justify-center items-center gap-2">
                        <Button className="flex h-12">
                            <div className="flex justify-center items-center gap-2 w-full">
                                <Image src={playStore} alt="playstore icon" className="w-12 h-12"/>
                                Download on playstore
                            </div>
                        </Button>
                        <Button className="flex h-12" variant="outline">
                            <div className="flex justify-center items-center gap-2">
                                <FaApple className="w-10 h-10"/>
                                Download on applestore
                            </div>
                        </Button>
                    </div>
                </div>

                {/* <div className="md:flex md:justify-center lg:justify-center lg:items-center md:items-center text-center bg-light-white lg:absolute md:relative lg:gap-[48px] md:gap-[24px] lg:top-[45rem] md:top-[-12rem] xsm:top-[5px] lg:left-[10rem] md:left-[10px] p-5 xsm:mt-[-10rem] rounded-[16px] drop-shadow-lg drop-shadow-shadow">
                    {components.map((component) => (
                        <div key={component.title}>
                            <h1 className="text-violet text-[24px] font-bold">{component.title}</h1>
                            <p className="text-violet">{component.description}</p>
                        </div>
                    ))}
                </div> */}
            </div>

            <div className="lg:w-1/2 md:w-1/2 xsm:w-full sm:w-full">
                <div>
                    <Slider {...settings} className="rounded-2xl">
                        {images.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-full aspect-square w-full lg:h-[450px] md:h-[300px] xsm:h-[200px]">
                                <Image src={image} alt={`Slide ${index + 1}`} className="w-full aspect-square lg:h-[450px] md:h-[300px] xsm:h-[200px] rounded-[50%] object-cover" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}