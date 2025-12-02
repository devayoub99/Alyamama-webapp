import NextImage from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import CornerDownRightArrow from "@/public/icons/corner-down-right-arrow.png";
import Counter1 from "@/public/get-started-with-us/01.png";

interface GetStatredCardProps {
  counter: string;
  title: string;
  Image: React.ReactNode;
  subSteps: { subTitle: string; subText: string }[];
}

const GetStatredCard = ({
  counter,
  title,
  Image,
  subSteps,
}: GetStatredCardProps) => {
  return (
    <Card className="py-0 bg-transparent border-0 shadow-none">
      <CardContent className="flex flex-col items-center justify-between px-0 gap-y-4 gap-x-12 md:flex-row">
        <div className="flex-1 md:text-start md:py-0">
          <h2 className="flex items-center gap-2 py-3 font-bold">
            <span
              className="text-6xl font-bold bg-gradient-to-b from-[#6366f1] via-[#4f46e5] to-[#3730a3] bg-clip-text text-transparent relative inline-block"
              style={{
                textShadow:
                  "3px 3px 0px rgba(75, 85, 99, 0.4), 6px 6px 0px rgba(75, 85, 99, 0)",
              }}
            >
              {counter}
            </span>
            <span className="text-2xl">{title}</span>
          </h2>
          {subSteps?.map((subStep, index) => (
            <div key={index} className="flex items-start gap-1 py-4">
              <NextImage
                src={CornerDownRightArrow}
                alt={`Step ${index}`}
                className="w-20"
              />
              <div>
                <h3 className="pb-2 text-xl font-bold">{subStep.subTitle}</h3>
                <p className="leading-8 text-justify">{subStep.subText}</p>
              </div>
            </div>
          ))}
        </div>
        {Image}
      </CardContent>
    </Card>
  );
};

export default GetStatredCard;
