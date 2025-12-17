import { Card, CardContent } from "@/components/ui/card";

import { CornerDownRight } from "lucide-react";
import GradientText from "./gradient-text";

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
          <div className="flex items-end gap-2 mb-4">
            <GradientText
              Element="span"
              text={counter}
              classNames="block py-3 text-7xl font-semibold"
              withShadow
            />
            <GradientText
              Element="h3"
              text={title}
              classNames="text-2xl font-semibold"
            />
          </div>

          {subSteps?.map((subStep, index) => (
            <div key={index} className="py-4">
              <div className="flex items-center gap-2">
                <CornerDownRight className="w-5 text-color1" />
                <GradientText
                  Element="h3"
                  text={subStep.subTitle}
                  classNames="pb-2 text-xl font-bold"
                />
              </div>
              <p className="leading-8 text-justify">{subStep.subText}</p>
            </div>
          ))}
        </div>
        {Image}
      </CardContent>
    </Card>
  );
};

export default GetStatredCard;
