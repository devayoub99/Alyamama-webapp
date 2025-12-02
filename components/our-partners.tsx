import { useTranslations } from "next-intl";
import Container from "./container";

import Image from "next/image";

// Our parnters logo
import TBI from "@/public/partners/TBI.jpg";
import USEmbassy from "@/public/partners/Us-embassy.png";
import MoO from "@/public/partners/MoO.png";
import SanaAlamar from "@/public/partners/Sana-alamar.jpg";
import Halawany from "@/public/partners/Halawany.jpg";
import Wadi from "@/public/partners/Wadi.png";
import Khoshnaw from "@/public/partners/Khoshnaw.jpg";
import Almaham from "@/public/partners/Almaham.jpg";
import LogoImage from "./logo-image";

const OurParnters = () => {
  const t = useTranslations("home");
  // border: 1px solid #bababa;
  // padding: 10px;
  // border-radius: 10px;
  return (
    // <section className="bg-color1">
    <section>
      <Container className="flex flex-col items-center" id="our-partners">
        <h2 className="mb-12 text-3xl font-medium border-b-2 border-gray-300 md:text-[40px] pb-4">
          {t("featured_clients")}
        </h2>
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 place-items-center">
          <LogoImage src={Almaham} alt="Almaham Company" />

          <LogoImage src={Khoshnaw} alt="Khoshnaw Group" />
          <LogoImage src={Wadi} alt="Wadi" />
          <LogoImage src={Halawany} alt="Halawany" />
          <LogoImage src={SanaAlamar} alt="Sana Alamar company" />
          <LogoImage src={MoO} alt="Ministry of Oil" />
          <LogoImage src={USEmbassy} alt="US embassy" />
          <LogoImage src={TBI} alt="TBI" />
        </div>
      </Container>
    </section>
  );
};

export default OurParnters;
