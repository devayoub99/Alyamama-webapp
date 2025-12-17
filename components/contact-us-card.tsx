import { Card, CardContent } from "@/components/ui/card";

interface ContactUsCardProps {
  title: string;
  text?: string;
  Link?: React.ReactNode;
  Image: React.ReactNode;
}

const ContactUsCard = ({ title, text, Link, Image }: ContactUsCardProps) => {
  return (
    <Card className="py-0 bg-transparent border-0 shadow-none">
      <CardContent className="flex flex-col items-center justify-between gap-4 px-0 md:flex-row">
        <div className="p-6 transition-all rounded-md md:p-8 bg-text-gradient-indigo">
          {Image}
        </div>
        <div className="flex-1 md:text-start md:py-0">
          <h2 className="text-lg font-bold text-center md:text-start">
            {title}
          </h2>
          {text && (
            <p className="leading-7 text-center md:text-start">{text}</p>
          )}
          {Link && Link}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactUsCard;
