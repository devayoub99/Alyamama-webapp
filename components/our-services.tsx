import { useTranslations } from "next-intl";
import Container from "./container";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";
import ServiceCard from "./service-card";
import GradientText from "./gradient-text";
import Image from "next/image";

import { insuranceTypesList } from "@/lib";

const OurServices = () => {
  const t = useTranslations("home");

  return (
    <section>
      <Container
        className="flex flex-col px-4 py-8 sm:px-6 lg:px-8"
        id="our-services"
        noPadding
      >
        <section className="flex flex-col gap-12 md:flex-row">
          <div className="flex-1">
            <span>{t("our_services")}</span>

            <GradientText
              Element="h2"
              text={t("our_service_package")}
              classNames="mb-4 text-3xl font-bold md:text-[40px]"
            />
          </div>
        </section>

        <Link href="/services" className="flex items-center justify-end gap-4">
          <span className="text-sm">{t("browse_all_services")}</span>
          <ArrowBigLeftDash className="w-6 h-8 animate-bounce-left" />
        </Link>

        <section className="grid grid-cols-1 gap-12 my-8 md:grid-cols-2">
          {insuranceTypesList.map((insurance) => (
            <ServiceCard
              key={insurance.id}
              title={insurance.name}
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
    </section>
  );
};

export default OurServices;
