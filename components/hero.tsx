import Image from "next/image";

import HeroImage from "@/public/all-insurance-types.png";
import Container from "./container";
import { useTranslations } from "next-intl";
import { LeftQuoteIcon, LockIcon, RightQuoteIcon } from "@/public/icons/icons";
import AnimatedCurlyArrow from "./animated-curly-arrow";

const Hero = () => {
  const t = useTranslations("home");

  return (
    <section className="h-screen">
      <Container className="flex flex-col justify-between md:flex-row">
        <div className="flex items-center justify-around flex-1">
          <Image
            src={HeroImage}
            alt="All insurance types"
            className="lg:w-[300] lg:h-[460] md:w-[200] md:h-[330] hidden md:block"
          />

          <AnimatedCurlyArrow className="self-center w-32  md:w-58 rotate-[216deg] md:rotate-0" />
        </div>

        <div className="flex flex-col justify-center flex-1">
          <p className="flex gap-2 animate-bounce">
            <LockIcon />
            {t("slogan")}
          </p>
          <h2 className="my-8 text-3xl font-bold md:text-5xl">
            {t("landingHeading")}
          </h2>
          <p className="relative">
            <RightQuoteIcon
              fill="#f4e84a"
              className="opacity-0 animate-scale-up"
            />
            <span className="opacity-0 italic ps-8 text-md md:text-[24px] animate-scale-up delay-1000">
              {t("landingQuote")}
            </span>
            <LeftQuoteIcon
              fill="#f4e84a"
              className="absolute left-0 opacity-0 animate-scale-up delay-1500"
            />
          </p>
          <p className="self-end my-16 text-sm font-bold opacity-0 animate-scale-up delay-2500 ">
            {t("visionBrief")}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
