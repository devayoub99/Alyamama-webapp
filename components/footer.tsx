import Image from "next/image";
import Container from "./container";

import { useTranslations } from "next-intl";

import LogoWithText from "@/public/white-logo-with-text.png";

import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import whatsappIcon from "@/public/icons/whatsapp.svg";
import tiktokIcon from "@/public/icons/tiktok.svg";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("home");

  return (
    <footer className="bg-color1">
      <Container
        className="flex flex-col justify-between gap-4 p-8 md:items-center md:flex-row"
        noPadding
      >
        <Image
          src={LogoWithText}
          alt="Alyamama Insurance"
          width={270}
          height={67}
          priority
          className="w-48 h-12"
        />
        <div>
          <p className="hidden text-lg text-white md:flex">
            {t("visit_us_on_social_media")}
          </p>
          <div className="flex justify-end gap-2 py-4">
            <Image src={tiktokIcon} alt="Facebook" width={32} height={32} />
            <a
              href="https://wa.me/+9647834855602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={whatsappIcon} alt="Facebook" width={32} height={32} />
            </a>
            <a
              href="https://www.instagram.com/yamamaha.co/?fbclid=IwY2xjawOYy65leHRuA2FlbQIxMQBicmlkETFYVGRGakladlNPRHFPTTY2c3J0YwZhcHBfaWQBMAABHmQiOtaA347p9sJ_L2YjKIIVGdJuKn9PTCptzlQfOz-6bm3k6X7W_nFNhx0N_aem_DqNPjoA_nAeYNyWP9dqeig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagramIcon}
                alt="Facebook"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578338987419#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebookIcon} alt="Facebook" width={32} height={32} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
