"use client"

import Link from 'next/link';
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { LiaUserLockSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import cart from "@/asset/icon/cart.svg"
import { FiSettings } from "react-icons/fi";
import Image from 'next/image';
import logo from "@/asset/logo.svg";
import support from "@/asset/icon/support.svg";
import { FaQuestion } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

const items = [
    {
        icon: RiDashboardHorizontalLine,
        title: "Dashboard",
        url: "/dashboard"
    },
    {
        icon: { LuWallet },
        title: "Wallet",
        url: "/dashboard/wallet"
    },
    {
        icon: { LiaUserLockSolid },
        title: "Investment portfolio",
        url: "/dashboard/portfolio"
    },
    {
        icon: cart,
        title: "Cart",
        url: "/dashboard/cart"
    },
    {
        icon: { FiSettings },
        title: "Settings",
        url: "/dashboard/settings"
    },
    {
        icon: support,
        title: "Support",
        url: "/dashboard/support"
    },
    {
        icon: { FaQuestion },
        title: "Faqs",
        url: "/dashboard/faqs"
    },
    {
        icon: { RiLogoutCircleLine },
        title: "Log out",
        url: "/dashboard/logout"
    },
]

export function SidebarLink() {
    return (
        <div>
           
        </div>
    )
}