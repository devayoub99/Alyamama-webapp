import { Card, CardContent } from "@/components/ui/card";
import GradientText from "./gradient-text";

interface ExpertiseCardProps {
  title: string;
  text: string;
  Image: React.ReactNode;
}

const ExpertiseCard = ({ title, text, Image }: ExpertiseCardProps) => {
  return (
    <Card className="py-0 bg-transparent border-0 shadow-none ">
      <CardContent className="flex flex-col items-center justify-between gap-4 px-0 md:flex-row">
        {Image}
        <div className="flex-1 px-6 py-4 text-center text-white md:text-start md:py-0">
          <GradientText
            Element="h3"
            text={title}
            classNames="py-3 text-2xl font-bold"
            theme="Secondary"
          />

          <p className="leading-7 text-justify">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertiseCard;
