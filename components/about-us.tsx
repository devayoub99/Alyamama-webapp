import { useTranslations } from "next-intl";
import Container from "./container";
import Image from "next/image";

import AboutUs1 from "@/public/about-us/1.png";
import AboutUs2 from "@/public/about-us/2.png";

// Our achievments logo
import ISO9001 from "@/public/certificates/iso-9001.png";
import ISO45001 from "@/public/certificates/iso-45001.png";
import NGI from "@/public/certificates/NGI.png";
import Prevensure from "@/public/certificates/Prevensure.png";
import IraqiReinsurance from "@/public/certificates/Iraqi-reinsurance.png";
import InannaInsurance from "@/public/certificates/Inanna-insurance.png";
import GradientText from "./gradient-text";

const AboutUs = () => {
  const t = useTranslations("home");

  return (
    <section>
      <Container className="flex flex-col" id="about-us">
        <section className="flex flex-col gap-y-4 gap-x-12 md:flex-row">
          <div className="flex-1">
            <span>{t("whoWeAre")}</span>
            <GradientText
              Element="h2"
              text={t("innovative_insurance_solutions")}
              classNames="mb-12 text-3xl font-bold md:text-[40px]"
            />

            <div>
              <GradientText
                Element="h3"
                text={t("our_vision")}
                classNames="mb-4 text-2xl font-bold md:mb-8 text-color1"
              />
              <p className="leading-6 text-justify">
                {t("mission_statement_intro")}
              </p>
              <p className="leading-6 text-justify">{t("vision_statement")}</p>
              <p className="leading-6 text-justify">
                {t("commitment_statement")}
              </p>
              <p className="leading-6 text-justify">{t("main_goal")}</p>
              <p className="leading-6 text-justify">
                {t("continuous_development")}
              </p>
              <p className="leading-6 text-justify">
                {t("human_capital_focus")}
              </p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-12">
            <div className="flex justify-center col-span-5">
              <Image
                src={AboutUs2}
                alt="About us 2"
                className="w-full h-full xl:h-70 max-w-md object-cover self-end hidden xl:flex rounded-2xl shadow-[10px_10px_8px_#FFEA95]"
              />
            </div>
            <div className="flex justify-center col-span-7">
              <Image
                src={AboutUs1}
                alt="About us 1"
                className="w-full h-full max-w-md object-cover rounded-2xl shadow-[10px_10px_8px_#72BDFF]"
              />
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
          <Image
            src={InannaInsurance}
            alt="InannaInsurance"
            className="w-16 rounded-full md:w-22"
          />
          <Image
            src={IraqiReinsurance}
            alt="IraqiReinsurance"
            className="w-16 rounded-full md:w-22"
          />
          <Image
            src={Prevensure}
            alt="Prevensure"
            className="w-16 rounded-full md:w-22"
          />

          <Image src={NGI} alt="NGI" className="w-16 rounded-full md:w-22" />
          <Image
            src={ISO45001}
            alt="ISO45001"
            className="w-16 rounded-full md:w-22"
          />
          <Image
            src={ISO9001}
            alt="ISO9001"
            className="w-16 rounded-full md:w-22"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
