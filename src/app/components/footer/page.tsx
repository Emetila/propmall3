"use client";

import Image from "next/image";
import logo from "@/app/asset/logo.svg";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className="bg-violet flex py-6 flex-col items-center gap-3 px-6">
            <div className="bg-light-white md:flex md:flex-row items-start w-full p-6 justify-between sm:flex-col">
                <div className="flex flex-col items-start gap-12">
                    <div className="flex flex-col items-start gap-3 text-violet">
                        <Image src={logo} alt="propmall" className="w-[88px] h-[20px]" />
                        <p className="w-[388px]">Build your real estate goals handpicking each investment to diversify your portfolio with low risk investments.</p>
                    </div>

                    <div className="flex flex-col items-start gap-3 fill-green-active">
                        <div className="flex items-center justify-center gap-2">
                            <MdOutlineEmail className="fill-green-active"/>
                            <a href="mailto:propmallestates@gmail.com" className="text-violet">propmallestates@gmail.com</a>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <IoLocationOutline className="fill-green-active" />
                            <address className="text-violet">Lagos, Abuja, Port-Harcourt</address>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-start gap-[78px] pr-10">
                        <ul className="flex flex-col items-start gap-2">
                            <li className="text-violet text-[18px] font-bold"><span>Company</span></li>
                            <li><a href="/our-story">Our story</a></li>
                            <li><a href="/assets">Asset listings</a></li>
                            <li><a href="/terms">Terms & conditions</a></li>
                            <li><a href="/privacy">Privacy policy</a></li>
                        </ul>

                        <ul className="flex flex-col items-start gap-2">
                            <li className="text-violet text-xl font-bold"><span>Social media</span></li>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">Facebook</a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">Instagram</a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">X(Twitter)</a>
                            </li>
                        </ul>

                        <ul className="flex flex-col items-start gap-2">
                            <li className="text-violet text-xl font-bold"><span>Resources</span></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/community">Community</a></li>
                        </ul>

                        <ul className="flex flex-col items-start gap-2">
                            <li className="text-violet text-xl font-bold"><span>Support</span></li>
                            <li><a href="/live-chat">Live chat</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className="text-green">
                &copy; {new Date().getFullYear()} 2024 Propmall. All rights reserved.
            </div>
        </footer>
    )
}