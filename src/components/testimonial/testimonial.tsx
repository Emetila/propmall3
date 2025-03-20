"use client"

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Review from "./review";
import { Card } from "../ui/card";
import { BsQuote } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa6";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-next`}
      style={{ ...style, display: "block", right: "10px", color: "green", zIndex: 1 }}
      onClick={onClick}
    >
      <MdOutlineKeyboardDoubleArrowRight className="h-20 w-14 bg-transparent text-dark-green active:text-green right-2" />
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
      <MdKeyboardDoubleArrowLeft className="h-20 w-14 bg-transparent text-dark-green" />
    </button>
  );
}
export default function TestimonialSection() {
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
    <section className="py-8 pb-20">
      <div className="px-16 pt-6">
        <h1 className="text-center text-violet font-bold text-2xl py-5">What our investors say About Us</h1>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Slider {...settings}>
            {Review.map((testimonial, index) => (
              <div key={index}>
                <Card className=" bg-light-violet shadow-md  rounded-lg mx-2 sm:mx-4 border-none pb-3">
                  <div className="bg-light-white rounded-[16px] drop-shadow-md drop-shadow-shadow relative md:mt-[-10px] pt-7 flex md:flex-col md:justify-center md:align-middle items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <Image
                      src={testimonial.Image}
                      alt={`${testimonial.name}'s photo`}
                      className="w-20 h-20 rounded-full object-cover relative top-5"
                    />
                  </div>
                  <div className="flex flex-col md:p-6">
                    <BsQuote />
                    <p className=" text-center sm:text-left md:px-4">
                      <q>{testimonial.quote}</q>
                    </p>
                    <FaQuoteRight />
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}