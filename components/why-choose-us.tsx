import { useTranslations } from "next-intl";
import Container from "./container";
import ExpertiseCard from "./expertise-card";

import Image from "next/image";

import WhyChooseUsImage from "@/public/why-alyamama/different-types-of-insurance.png";

import StarIcon from "@/public/icons/star.png";
import ShieldIcon from "@/public/icons/shield.png";
import HandshakeIcon from "@/public/icons/handshake.png";

const WhyChooseUs = () => {
  const t = useTranslations("home");

  return (
    <section className="bg-deep-fade" id="why-choose-us">
      <Container
        className="flex flex-col items-center gap-12 md:flex-row"
        id="why-choose-us"
      >
        <div className="gap-4 text-white flex-2">
          <span className="flex justify-center">
            {t("why_choose_al_yamama")}
          </span>
          <h2 className="mb-12 text-3xl font-bold md:text-[40px] text-center">
            {t("what_distinguishes_al_yamama")}
          </h2>

          <div className="flex flex-col gap-8">
            <ExpertiseCard
              title={t("advantage_expertise_title")}
              text={t("advantage_expertise_desc")}
              Image={
                // <div className="px-1 py-2 bg-white rounded-sm">
                <Image
                  src={StarIcon}
                  alt={t("advantage_expertise_title")}
                  className="rounded-sm w-14"
                />
                // </div>
              }
            />

            <ExpertiseCard
              title={t("advantage_coverage_title")}
              text={t("advantage_coverage_desc")}
              Image={
                <div className="px-1 py-2 bg-white rounded-sm">
                  <Image
                    src={ShieldIcon}
                    alt={t("advantage_coverage_title")}
                    className="w-14"
                  />
                </div>
              }
            />

            <ExpertiseCard
              title={t("advantage_customer_focus_title")}
              text={t("advantage_customer_focus_desc")}
              Image={
                <div className="px-1 py-2 bg-white rounded-sm">
                  <Image
                    src={HandshakeIcon}
                    alt={t("advantage_customer_focus_title")}
                    className="w-14"
                  />
                </div>
              }
            />
          </div>
        </div>

        <Image
          src={WhyChooseUsImage}
          alt={t("health_insurance")}
          className="flex-1 rounded-full w-full shadow-[0_0_17px_#888]"
        />
      </Container>
    </section>
  );
};

export default WhyChooseUs;
