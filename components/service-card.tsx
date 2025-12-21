import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import GradientText from "./gradient-text";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  text: string;
  Image: React.ReactNode;
}

const ServiceCard = ({ title, text, Image }: ServiceCardProps) => {
  const t = useTranslations("home");

  return (
    <Link
      href={`services/${title}`}
      className="flex flex-col gap-6 border shadow-sm bg-card text-card-foreground rounded-xl"
    >
      <CardContent className="flex flex-col items-center justify-between gap-6 px-0 md:flex-row">
        <div className="flex-1 py-4 text-center ps-6 md:text-start md:py-0">
          <GradientText
            Element="h3"
            text={t(title)}
            classNames="py-2 text-2xl font-bold"
          />

          <p className="leading-7 text-right md:text-justify">{t(text)}</p>
        </div>
        {Image}
      </CardContent>
    </Link>
  );
};

export default ServiceCard;
