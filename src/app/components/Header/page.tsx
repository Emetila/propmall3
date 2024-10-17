// import {
//     Menubar,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarSeparator,
//     MenubarShortcut,
//     MenubarTrigger,
// } from "@/components/ui/menubar"

// export const Menu = () => {
//     return (
//         <Menubar>
//             <MenubarMenu>
//                 <MenubarTrigger>Asset</MenubarTrigger>
//                 <MenubarContent>
//                     <MenubarItem>
//                         <h2>Featured properties</h2> 
//                         <p>Find your next property buy</p>
//                     </MenubarItem>
//                     <MenubarItem>New Window</MenubarItem>
//                     <MenubarSeparator />
//                     <MenubarItem>Share</MenubarItem>
//                     <MenubarSeparator />
//                     <MenubarItem>Print</MenubarItem>
//                 </MenubarContent>
//             </MenubarMenu>
//         </Menubar>
//     )
// }

"use client"

import * as React from "react"
import Link from "next/link"
import logo from "@/app/asset/logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Blog",
        href: "/blog",
        description:
            "Discover insights and trends",
    },
    {
        title: "Community",
        href: "/community",
        description:
            "Join our real estate network",
    },
    {
        title: "FAQs",
        href: "/faqs",
        description:
            "Get answer to your questions",
    },
]

export function Header() {
    return (
        <header className="flex justify-between px-10 py-5 static">
            <div>
                <a href="/home"><Image src={logo} alt="propmall" /></a>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-green text-[18px] font-bold font-[Montserrat] hover:text-dark-green active:text-violet">Assets</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-light-green-active">
                            <ul className="flex flex-col md:w-[200px] lg:w-[200px] ">
                                <li >
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md hover:bg-green hover:text-light-green"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Featured properties
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Find your next property buy
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md hover:bg-green hover:text-light-green"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Investments
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Explore investment options
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                {/* <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-green hover:text-dark-green active:text-violet">
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className="text-green text-[18px] font-bold font-[Montserrat] hover:text-dark-green active:text-violet">
                                Our story
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-green text-[18px] font-bold font-[Montserrat] hover:text-dark-green active:text-violet">Resources</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-light-green-active">
                            <ul className="flex flex-col md:w-[200px] lg:w-[200px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title} className="flex h-full w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md hover:bg-green hover:text-light-green text-lg font-medium"
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-green text-[18px] font-bold font-[Montserrat] hover:text-dark-green active:text-violet">Support</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-light-green-active">
                            <ul className="flex flex-col w-[120px] gap-3 p-4 md:w-[120px]  lg:w-[300px]">

                                <ListItem href="/live-chat" title="Live chat" className="flex h-full w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none text-lg font-medium focus:shadow-md hover:bg-green hover:text-light-green">
                                    Chat with us in real time
                                </ListItem>
                                <ListItem href="/contact" title="Contact us" className="flex h-full w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md hover:bg-green hover:text-light-green">
                                    Reach us for more inquiries
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center justify-center gap-2">
                <Button variant="secondary">Log in</Button>
                <Button>Sign up</Button>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"