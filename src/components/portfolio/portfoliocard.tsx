
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface WorkCardProps {
    title: string;
    image: string;
    description: string;
}

const WorksCard = ({ title, image, description }: WorkCardProps) => {
    return (
        <Card className="border-hidden flex flex-col items-center justify-center w-[300px] bg-light-green-active  gap-5 rounded-[16px] drop-shadow-sm drop-shadow-shadow">
            <CardHeader className="text-sm font-bold">{title}</CardHeader>
            <CardContent>
                <div>
                    <div className="w-full h-[150px]">
                        <Image src={image} alt={title} className="w-full h-[150px]" />
                    </div>
                    <p className="text-sm leading-6 pb-3">{description}</p>
                    <Button className="w-full">
                        Explore portfolio
                        <IoArrowForwardCircleOutline />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default WorksCard;
