
import Image from "next/image";
import { Header } from "@/app/components/header/page";
import { Footer } from "@/app/components/footer/page";
import image1 from "@/app/asset/images/house.svg";
import HeroImage from "@/app/asset/images/hero-background.svg";
import { Button } from "@/components/ui/button";
import { TbSeeding } from "react-icons/tb";

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

export const HomePage: React.FC = () => {
    return (
        <section>
            <div>
                <Header />
            </div>
            <main>
                <div>
                    <div className="relative">
                        <Image src={HeroImage} alt="heroimage" className="w-full" />
                        {/* <div className="bg-blend-overlay bg-overlay absolute"></div> */}
                    </div>
                    <div className="inline-flex flex-col gap-4 text-center px-56 font-[Open Sans] justify-center items-center absolute top-[80px] inset-0 bg-black bg-opacity-50 h-[500px]">
                        <h1 className="text-[48px] font-bold text-light-white">Secure your future with smart real estate investment choices</h1>
                        <p className="text-light-white text-[20px] px-32">We find hidden gems with explosive growth potential so you can watch your wealth grow. Your financial security starts here.</p>
                        <Button className="flex w-[200px]">
                            <div className="flex justify-center items-center gap-4">
                                Get Started
                                <TbSeeding />
                            </div>
                        </Button>
                    </div>
                    <div className="flex justify-center items-center text-center bg-light-white absolute gap-[48px] top-[33rem] left-[20rem] p-5 rounded-[16px] drop-shadow-lg drop-shadow-shadow">
                        {components.map((component) => (
                            <div key={component.title}>
                                <h1 className="text-violet text-[24px] font-bold">{component.title}</h1>
                                <p className="text-violet">{component.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-10 py-20">
                    <div className="inline-flex items-center gap-5">
                        <div>
                            <Image src={image1} alt="house" className="w-80 shrink-0" />
                            <div className="relative top-[-70px] text-center">
                                <h2 className="text-violet font-bold">$250,000</h2>
                                <p>Initial valuation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}