"use client"

import Image from "next/image";
import Header from "@/app/components/header/page";
import { Footer } from "@/app/components/footer/page";
import image1 from "@/app/asset/images/house.svg";
import HeroImage from "@/app/asset/images/hero-background.svg";
import { Button } from "@/components/ui/button";
import { TbSeeding } from "react-icons/tb";
import vector from "@/app/asset/vector.svg";
import portfolio from "./portfolio";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Portfolio from "./portfolio";
import CalculateSection from "./calculate-section";
import imag2 from "@/app/asset/images/calculateimage.svg";
import Review from "./review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} slick-next`}
        style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
        onClick={onClick}
      >
        <MdOutlineKeyboardDoubleArrowRight className="h-8 w-8 text-gray-700" />
      </button>
    );
  }
  
  // Custom Previous Arrow Component
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} slick-prev`}
        style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
        onClick={onClick}
      >
        <MdKeyboardDoubleArrowLeft className="h-8 w-8 text-gray-700" />
      </button>
    );
  }

export const HomePage: React.FC = () => {
    // Carousel settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet: show 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // Mobile: show 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

    return (
        <section>
            <div>
                <Header />
            </div>
            <main>
                <div>
                    <div className="relative sm:h-50">
                        <Image src={HeroImage} alt="heroimage" className="w-full" />
                        {/* <div className="bg-blend-overlay bg-overlay absolute"></div> */}
                    </div>
                    <div className="inline-flex flex-col gap-4 text-center md:px-56 sm:px-10 font-[Open Sans] justify-center items-center absolute md:top-[80px] lg:top-[80px] sm:top-[95px] inset-0 bg-black bg-opacity-50 md:h-[500px] lg:h-[500px] sm:h-[210px]">
                        <h1 className="md:text-[48px] lg:text-[48px] sm:text-2xl font-bold text-light-white ">Secure your future with smart real estate investment choices</h1>
                        <p className="text-light-white text-[20px] px-32 sm:px-10 sm:text-[16px]">We find hidden gems with explosive growth potential so you can watch your wealth grow. Your financial security starts here.</p>
                        <Button className="flex w-[200px]">
                            <div className="flex justify-center items-center gap-4">
                                Get Started
                                <TbSeeding />
                            </div>
                        </Button>
                    </div>
                    <div className="md:flex md:justify-center md:items-center text-center bg-light-white md:absolute gap-[48px] top-[33rem] left-[20rem] p-5 rounded-[16px] drop-shadow-lg drop-shadow-shadow">
                        {components.map((component) => (
                            <div key={component.title}>
                                <h1 className="text-violet text-[24px] font-bold">{component.title}</h1>
                                <p className="text-violet">{component.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-10 pt-20">
                    <div className="inline-flex items-center gap-5">
                        <div>
                            <Image src={image1} alt="house" className="w-[40rem] shrink-0 " />
                            <div className="relative top-[-70px] text-center">
                                <h2 className="text-violet font-bold">$250,000</h2>
                                <p>Initial valuation</p>
                            </div>
                        </div>
                        <div className="flex  flex-col gap-5">
                            <div className="inline-flex flex-col relative right-[4rem] top-150rem]">
                                <p className="bg-green text-violet rounded text-center px-20">149.2%</p>
                                <p className="text-green-active text-center">Appreciation rate</p>
                            </div>
                            <div className="text-center text-green-active inline-flex flex-col items-center pl-32">
                                <p className="font-bold text-[18px]">$623,000</p>
                                <p>Current valuation</p>
                            </div>
                            <Image src={vector} alt="vector" className="w-[15rem] relative right-[5rem] top-[-10px]" />
                            <div className="text-center text-green-active inline-flex flex-col items-center relative top-[-3rem] right-12">
                                <p className="font-bold text-[18px] text-center">$1,500</p>
                                <p className="text-center">Monthly returns</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-violet font-bold text-2xl font-sans pl-24">A portfolio to match your financial goals. We are here to guide you all the way!</h1>
                        </div>
                    </div>
                </div>

                <div className="px-10 pb-10">
                    <h1 className="text-center text-violet font-bold text-2xl py-5">Explore our investment portfolio and start your dream life</h1>
                    <div className="flex justify-center items-start gap-20 pt-6 text-center text-wrap">
                        {Portfolio.map((portfolios) => (
                            <div key={portfolios.title} className="bg-light-green-active  w-[300px] flex flex-col p-[24px] items-center gap-5 rounded-[16px] drop-shadow-sm drop-shadow-shadow">
                                <h1 className="font-semibold">{portfolios.title}</h1>
                                <Image src={portfolios.image} alt="images" className="" />
                                <p>{portfolios.description}</p>
                                <Button className="w-full">
                                    <a href={portfolios.href} className="flex items-center gap-3">
                                        Explore portfolio
                                        <IoArrowForwardCircleOutline />
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-center">
                        <h1 className="text-center text-violet font-bold text-2xl py-5">Let’s calculate your Dream Investment</h1>
                        <p className="text-violet">See what your potential returns on your investment look like</p>
                    </div>
                    <div className="md:flex md:flex-row items-center pb-6 pt-10 sm:flex-col">
                        <div className="grow">
                            <CalculateSection />
                        </div>
                        <div className="grow">
                            <Image src={imag2} alt="image2" className="w-56" />
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

                <div className="px-16 pt-6">
                    <h1 className="text-center text-violet font-bold text-2xl py-5">What our investors say About Us</h1>
                </div>
                <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Clients Say</h2>

        <Slider {...settings}>
          {Reviews.map((testimonial, index) => (
            <div key={index}>
              <Card className="p-6 bg-white shadow-md rounded-lg mx-2 sm:mx-4">
                <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s photo`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-center sm:text-left">
                  "{testimonial.feedback}"
                </p>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
                </div>
            </main>
        </section >
    )
}