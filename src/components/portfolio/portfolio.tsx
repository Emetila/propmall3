
import WorksCard from "./portfoliocard";
import image1 from "@/asset/images/house.svg";
import image2 from "@/asset/images/strategic-investments.svg";
import image3 from "@/asset/images/legacy-investments.svg";

export default function Works() {
    return (
        <div>
            <div className="flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-start lg:gap-14 md:gap-8 xsm:gap-8 sm:gap-8 shadow-none">
                <WorksCard
                    title="Swift returns"
                    image={image1}
                    description="Perfect for investors with short term goals with high-yield in 6months."
                />

                <WorksCard
                    title="Strategic investments"
                    image={image2}
                    description="Medium term investments suitable for moderate returns in less than 3 years."
                />

                <WorksCard
                    title="Legacy investments"
                    image={image3}
                    description="Invest now to build wealth for 5 to 10 years."
                />
            </div>
        </div>
    )
}