import Image from "next/image";
import review1 from "@/app/asset/images/review1.svg";
import review2 from "@/app/asset/images/client2.svg";
import image3 from "@/app/asset/images/client3.svg";
import image4 from "@/app/asset/images/client4.svg";
import image5 from "@/app/asset/images/client5.svg";
import image6 from "@/app/asset/images/client6.svg";

const Review: {Image:string, name: string; role: string; quote: string }[] = [
    {
        name: "Esther Williams",
        role: "Media branding consultant",
        Image: review1,
        quote: "I couldn't be happier with my decision to invest with Propmall. The Swift Returns option gave me quick and substantial gains. The entire process was seamless, and the support team was incredibly helpful. Highly recommended!"
    },
    {
        name: "Mannuel Fibba",
        role: "Software engineer",
        Image: review2,
        quote: "As a first-time investor, I was a bit nervous, but Propmall made it so easy. The Swift Returns option allowed me to see quick gains, which boosted my confidence. I can't wait to explore more investment opportunities with them!"
    },
    {
        name: "Segwe Fovkwe",
        role: "Accountant",
        Image: image3,
        quote: "I couldn't be happier with my decision to invest with Propmall. The Swift Returns option gave me quick and substantial gains. The entire process was seamless, and the support team was incredibly helpful. Highly recommended!"
    },
    {
        name: "Esther Williams",
        role: "Media branding consultant",
        Image: image4,
        quote: "I couldn't be happier with my decision to invest with Propmall. The Swift Returns option gave me quick and substantial gains. The entire process was seamless, and the support team was incredibly helpful. Highly recommended!"
    },
    {
        name: "Esther Williams",
        role: "Media branding consultant",
        Image: image5,
        quote: "I couldn't be happier with my decision to invest with Propmall. The Swift Returns option gave me quick and substantial gains. The entire process was seamless, and the support team was incredibly helpful. Highly recommended!"
    },
    {
        name: "Esther Williams",
        role: "Media branding consultant",
        Image: image6,
        quote: "I couldn't be happier with my decision to invest with Propmall. The Swift Returns option gave me quick and substantial gains. The entire process was seamless, and the support team was incredibly helpful. Highly recommended!"
    },
]

export default Review;