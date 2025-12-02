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

const AboutUs = () => {
  const t = useTranslations("home");

  return (
    <section>
      <Container className="flex flex-col" id="about-us">
        <section className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <span>{t("whoWeAre")}</span>
            <h2 className="mb-12 text-3xl font-bold md:text-[40px]">
              {t("innovative_insurance_solutions")}
            </h2>

            <div>
              <h3 className="mb-8 text-2xl font-bold text-color1">
                {t("our_vision")}
              </h3>
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
          <div className="grid gap-8 flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-12">
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
        <div className="mt-16 mx-auto grid grid-cols-4 gap-8 sm:grid-cols-5 md:grid-cols-6 place-items-center">
          <Image
            src={InannaInsurance}
            alt="InannaInsurance"
            className="rounded-full"
          />
          <Image
            src={IraqiReinsurance}
            alt="IraqiReinsurance"
            className="rounded-full"
          />
          <Image src={Prevensure} alt="Prevensure" className="rounded-full" />

          <Image src={NGI} alt="NGI" className="rounded-full" />
          <Image src={ISO45001} alt="ISO45001" className="rounded-full" />
          <Image src={ISO9001} alt="ISO9001" className="rounded-full" />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
