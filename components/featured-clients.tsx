import { useTranslations } from "next-intl";
import Container from "./container";
import GradientText from "./gradient-text";

// Our parnters logo
import TBI from "@/public/featured-clients/TBI.jpg";
import USEmbassy from "@/public/featured-clients/Us-embassy.png";
import MoO from "@/public/featured-clients/MoO.png";
import SanaAlamar from "@/public/featured-clients/Sana-alamar.jpg";
import Halawany from "@/public/featured-clients/Halawany.jpg";
import Wadi from "@/public/featured-clients/Wadi.png";
import Khoshnaw from "@/public/featured-clients/Khoshnaw.jpg";
import Almaham from "@/public/featured-clients/Almaham.jpg";
import LogoImage from "./logo-image";
import Link from "next/link";

const OurParnters = () => {
  const t = useTranslations("home");

  return (
    <section>
      <Container
        className="relative flex flex-col items-center"
        id="featured-clients"
      >
        <GradientText
          Element="h2"
          text={t("featured_clients")}
          classNames="mb-12 text-3xl font-bold md:text-[40px] pb-4"
        />
        {/* <button className="p-4 border cursor-pointer">CLick here</button> */}

        <Link href="/client/1">asd</Link>
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
