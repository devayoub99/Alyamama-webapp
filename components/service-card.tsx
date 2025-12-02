import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  text: string;
  Image: React.ReactNode;
}

const ServiceCard = ({ title, text, Image }: ServiceCardProps) => {
  return (
    <Card className="py-0">
      <CardContent className="flex flex-col gap-4 md:flex-row justify-between items-center px-0">
        <div className="text-center px-6 py-4 md:text-start md:py-0 flex-1">
          <h2 className="text-2xl font-bold py-2">{title}</h2>
          <p>{text}</p>
        </div>
        {Image}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
