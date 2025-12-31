import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import ServiceCard from "@/components/service-card";
import { insuranceTypesList } from "@/lib";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Services = () => {
  const t = useTranslations("home");

  return (
    <Container className="flex flex-col" id="about-us">
      <GradientText
        Element="h2"
        text={t("our_service_package")}
        classNames="text-3xl font-bold md:text-[40px] text-center mb-4"
      />
      <section className="grid grid-cols-1 gap-12 my-8 md:grid-cols-2">
        {insuranceTypesList.map((insurance) => (
          <ServiceCard
            key={insurance.id}
            title={insurance.name}
            link={insurance.link}
            text={insurance.description}
            Image={
              <Image
                src={`/our-services/${insurance.imageSrc}`}
                alt={insurance.name}
                width={100}
                height={100}
                className="flex-1 w-full rounded-2xl"
              />
            }
          />
        ))}
      </section>
    </Container>
  );
};

export default Services;
