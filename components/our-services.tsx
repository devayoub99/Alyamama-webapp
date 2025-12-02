import { useTranslations } from "next-intl";
import Container from "./container";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";
import ServiceCard from "./service-card";
import Image from "next/image";

import service1 from "@/public/our-services/health-insurance.png";
import service2 from "@/public/our-services/life-insurance.png";
import service3 from "@/public/our-services/cars-insurance.png";
import service4 from "@/public/our-services/engineering-insurance.png";
import VideoLogo from "./VideoLogo";

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
            <span>{t("ourServices")}</span>
            <h2 className="mb-4 text-3xl font-bold md:text-[40px]">
              {t("our_service_package")}
            </h2>
          </div>
        </section>

        <Link href="/services" className="flex items-center justify-end gap-3 ">
          <span className="">{t("browse_all_services")}</span>
          <ArrowBigLeftDash className="animate-bounce-left" />
        </Link>

        {/* <section className="flex flex-col gap-12 my-8 md:flex-row"> */}
        <section className="grid grid-cols-1 gap-12 my-8 md:grid-cols-2">
          <ServiceCard
            title={t("health_insurance")}
            text={t("health_insurance_desc")}
            Image={
              <Image
                src={service1}
                alt={t("health_insurance")}
                className="flex-1 w-full rounded-2xl"
              />
            }
          />
          <ServiceCard
            title={t("life_insurance")}
            text={t("life_insurance_desc")}
            Image={
              <Image
                src={service2}
                alt={t("life_insurance")}
                className="flex-1 w-full rounded-2xl"
              />
            }
          />
          <ServiceCard
            title={t("car_insurance")}
            text={t("car_insurance_desc")}
            Image={
              <Image
                src={service3}
                alt="Service 1"
                className="flex-1 w-full rounded-2xl"
              />
            }
          />
          <ServiceCard
            title={t("engineering_insurance")}
            text={t("engineering_insurance_desc")}
            Image={
              <Image
                src={service4}
                alt="Service 1"
                className="flex-1 w-full rounded-2xl"
              />
            }
          />
        </section>
      </Container>
    </section>
  );
};

export default OurServices;
