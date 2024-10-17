"use client";

import Image from "next/image";
import logo from "@/app/asset/logo.svg";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <Image src={logo} alt="propmall" />
                    <p>Build your real estate goals handpicking each investment to diversify your portfolio with low risk investments.</p>
                </div>

                <div>
                    <div>
                        <ul>
                            <li><span>Company</span></li>
                            <li><a href="/our-story">Our story</a></li>
                            <li><a href="/assets">Asset listings</a></li>
                            <li><a href="/terms">Terms & conditions</a></li>
                            <li><a href="/privacy">Privacy policy</a></li>
                        </ul>

                        <ul>
                            <li><span>Social media</span></li>
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

                        <ul>
                            <li><span>Resources</span></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/community">Community</a></li>
                        </ul>

                        <ul>
                            <li><span>Support</span></li>
                            <li><a href="/live-chat">Live chat</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <MdOutlineEmail />
                        <a href="mailto:propmallestates@gmail.com">propmallestates@gmail.com</a>
                    </div>
                    <div>
                        <IoLocationOutline />
                        <address>Lagos, Abuja, Port-Harcourt</address>
                    </div>
                </div>
            </div>

            <div>
                &copy; {new Date().getFullYear()} 2024 Propmall. All rights reserved.
            </div>
        </footer>
    )
}