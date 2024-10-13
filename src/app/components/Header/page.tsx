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

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Assets</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <MdKeyboardArrowDown className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Featured properties
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Find your next property buy
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <MdKeyboardArrowDown className="h-6 w-6" />
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
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Our story
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenu>
                    <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            <ListItem href="/live-chat" title="Live chat">
                                Chat with us in real time
                            </ListItem>
                            <ListItem href="/contact" title="Contact us">
                                Reach us for more inquiries
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenu>
            </NavigationMenuList>
        </NavigationMenu>
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