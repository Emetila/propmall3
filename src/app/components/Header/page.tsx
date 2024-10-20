"use client"

import { ChevronDownIcon } from "lucide-react";
import * as React from "react"
import { useState } from "react";
import Link from "next/link"
import logo from "@/app/asset/logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IoMenu } from "react-icons/io5";
import { XIcon } from "lucide-react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#fff] py-2">
            <div className="flex justify-center items-center gap-[100px] px-10">
                <div className="md:flex justify-between grow h-16 items-center sm:block">
                    <Link href="/"><Image src={logo} alt="logo" /></Link>
                </div>
                {/* Desktop Menu */}
                <div className="sm:hidden md:block xsm:hidden lg:block">
                    {/* Home Dropdown */}
                    <div className="flex justify-center items-start gap-5">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center space-x-2 active-violet border-none hover:underline text-green text-xl font-bold">
                                    <span>Assets</span>
                                    <IoIosArrowDown className="w-5 h-5" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-light-white">
                                <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                    <Link href="/properties" className="flex flex-col justify-start text-start">
                                        <h1 className="text-xl text-start">Featured properties</h1>
                                        <p className="text-grey">Find your next property buy</p></Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                    <Link href="/investment" className="flex flex-col items-start justify-start text-start">
                                        <h1 className="text-xl text-start">Investments</h1>
                                        <p className="text-grey">Explore investment options</p></Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <Link className="flex items-center space-x-2 active-violet border-none hover:underline text-green text-xl font-bold" href="/about">Our story</Link>
                        </DropdownMenu>

                        {/* About Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center space-x-2 active-violet border-none hover:underline text-green text-xl font-bold">
                                    <span>Resources</span>
                                    <IoIosArrowDown className="w-5 h-5" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-light-white">
                                <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                    <Link href="/blog" className="flex flex-col items-start justify-start text-start">
                                        <h1 className="text-xl text-start">Blog</h1>
                                        <p className="text-grey">Discover insights and trends</p>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                    <Link href="/community" className="flex flex-col items-start justify-start text-start">
                                        <h1 className="text-xl text-start">Community</h1>
                                        <p className="text-grey">Join our real estate network</p>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                    <Link href="/faqs" className="flex flex-col items-start justify-start text-start">
                                        <h1 className="text-xl text-start">FAQs</h1>
                                        <p className="text-grey">Get answer to your questions</p>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Calculator Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center space-x-2 active-violet border-none hover:underline text-green text-xl font-bold">
                                    <span>Support</span>
                                    <ChevronDownIcon className="w-5 h-5" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-light-white">
                                <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                    <Link href="/live-chat" className="flex flex-col items-start justify-start text-start">
                                        <h1 className="text-xl text-start">Live chat</h1>
                                        <p className="text-grey">Chat with us in real time</p></Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                    <Link href="/contact" className="flex flex-col items-start justify-start text-start">
                                        <h1 className="text-xl text-start">Contact us</h1>
                                        <p className="text-grey">Reach us for more inquiries</p>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="md:flex justify-center items-center gap-5 grow sm:hidden xsm:hidden">
                    <Button variant="secondary">Log in</Button>
                    <Button>Sign up</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <Button onClick={toggleMenu}>
                        {isOpen ? <XIcon className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>


            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-light-white pb-30 flex flex-col items-start px-10">
                    {/* Home Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="w-full flex justify-between py-2 active-violet items-center hover:underline text-green text-xl font-bold">
                                <span>Assets</span>
                                <IoIosArrowDown className="w-5 h-5" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-light-white">
                            <DropdownMenuItem asChild className="w-full">
                                <Link href="/properties" className="w-full flex flex-col justify-start text-start">
                                    <h1 className="text-xl text-start">Featured properties</h1>
                                    <p className="text-grey">Find your next property buy</p></Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/investment" className="flex flex-col items-start justify-start text-start">
                                    <h1 className="text-xl text-start">Investments</h1>
                                    <p className="text-grey">Explore investment options</p></Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <Link className="flex items-center space-x-2 active-violet border-none hover:underline text-green text-xl font-bold" href="/about">Our story</Link>
                    </DropdownMenu>

                    {/* About Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="flex items-center space-x-2 active-violet border-none hover:underline text-green text-xl font-bold">
                                <span>Resources</span>
                                <IoIosArrowDown className="w-5 h-5" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-light-white">
                            <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                <Link href="/blog" className="flex flex-col items-start justify-start text-start">
                                    <h1 className="text-xl text-start">Blog</h1>
                                    <p className="text-grey">Discover insights and trends</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                <Link href="/community" className="flex flex-col items-start justify-start text-start">
                                    <h1 className="text-xl text-start">Community</h1>
                                    <p className="text-grey">Join our real estate network</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                <Link href="/faqs" className="flex flex-col items-start justify-start text-start">
                                    <h1 className="text-xl text-start">FAQs</h1>
                                    <p className="text-grey">Get answer to your questions</p>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Calculator Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="flex items-center space-x-2 active-violet border-none hover:underline text-green text-xl font-bold">
                                <span>Support</span>
                                <ChevronDownIcon className="w-5 h-5" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-light-white">
                            <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                <Link href="/live-chat" className="flex flex-col items-start justify-start text-start">
                                    <h1 className="text-xl text-start">Live chat</h1>
                                    <p className="text-grey">Chat with us in real time</p></Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="hover:bg-light-green-active hover:border-l-2 border-violet">
                                <Link href="/contact" className="flex flex-col items-start justify-start text-start">
                                    <h1 className="text-xl text-start">Contact us</h1>
                                    <p className="text-grey">Reach us for more inquiries</p>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )}


        </nav>
    );
}
