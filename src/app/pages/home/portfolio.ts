import Image from "next/image";
import image1 from "@/app/asset/images/portfolio1.svg";
import image2 from "@/app/asset/images/portfolio2.svg";
import image3 from "@/app/asset/images/portfolio3.svg";

const Portfolio: {image:string, title: string; href: string; description: string }[] = [
    {
        title: "Swift returns",
        image: image1,
        description: "Perfect for investors with short term goals with high-yield in 6months.",
        href: "/portfolio",
    },
    {
        title: "Strategic investments",
        image: image2,
        description: "Medium term investments suitable for moderate returns in less than 3 years.",
        href: "/portfolio",
    },
    {
        title: "Legacy investments",
        image: image3,
        description: "Invest now to build wealth for 5 to 10 years.",
        href: "/portfolio",
    },
]

export default Portfolio