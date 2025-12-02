import Image from "next/image";

import HeroImage from "@/public/hero.png";
import Container from "./container";
import { useTranslations } from "next-intl";
import { LeftQuoteIcon, LockIcon, RightQuoteIcon } from "@/public/icons/icons";
import AnimatedCurlyArrow from "./animated-curly-arrow";

const Hero = () => {
  const t = useTranslations("home");

  return (
    <section className="flex flex-1 text-white bg-deep-fade">
      <Container className="flex flex-col justify-between flex-1 md:flex-row">
        <div className="flex items-center justify-center flex-1">
          <Image
            src={HeroImage}
            alt="All insurance types"
            className="mb-8 w-50 md:w-100"
            // className="lg:w-[300] lg:h-[460] md:w-[200] md:h-[330] hidden md:block"
          />

          <AnimatedCurlyArrow className="self-center hidden md:block md:w-58" />
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
            <span className="opacity-0 italic font-medium block text-center text-md md:text-[20px] animate-scale-up delay-1000">
              {t("landingQuote")}
            </span>
            <LeftQuoteIcon
              fill="#f4e84a"
              className="absolute left-0 -translate-y-4 opacity-0 animate-scale-up delay-1500"
            />
          </p>
          <p className="self-end my-10 text-sm italic font-light opacity-0 animate-scale-up delay-2500 ">
            {t("visionBrief")}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
