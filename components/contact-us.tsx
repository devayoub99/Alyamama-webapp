import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "./container";

import PhoneIcon from "@/public/icons/phone.svg";
import MapIcon from "@/public/icons/map-pin.svg";
import WorkingHoursIcon from "@/public/icons/working-hours.svg";
import EmailIcon from "@/public/icons/mail.svg";

import ContactUsCard from "./contact-us-card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactUs = () => {
  const t = useTranslations("home");

  return (
    <section>
      <Container className="flex flex-col" id="get-started">
        <div className="gap-4 flex-2 md:mb-14">
          <span className="flex justify-center">{t("start_with_us_cta")}</span>
          <h2 className="mt-2 text-2xl font-bold md:text-[40px] text-center">
            {t("get_comprehensive_coverage")}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <section className="flex-1 py-8 md:py-10">
            <h3 className="text-xl font-medium text-center">
              {t("stay_in_touch")}
            </h3>
            <div className="flex flex-col gap-6 pt-8 pb-8 md:pt-20">
              <ContactUsCard
                title={t("label_phone_number")}
                text="+964 783 485 5602"
                Image={<Image src={PhoneIcon} alt="New" className="w-6" />}
              />
              <ContactUsCard
                title={t("label_address")}
                text={t("address_detail")}
                Image={<Image src={MapIcon} alt="New" className="w-6" />}
              />
              <ContactUsCard
                title={t("label_working_hours")}
                text={t("working_hours_detail")}
                Image={
                  <Image src={WorkingHoursIcon} alt="New" className="w-6" />
                }
              />
              <ContactUsCard
                title={t("label_email")}
                text="info@alyamama-iq.com"
                Image={<Image src={EmailIcon} alt="New" className="w-6" />}
              />
            </div>
          </section>
          <section className="flex-1 py-10 px-10 bg-[#F3F5FC] rounded-xl">
            <h3 className="text-xl font-medium text-center">
              {t("contact_message")}
            </h3>

            <form className="flex flex-col gap-6 pt-20 pb-8">
              <div>
                <Label className="mb-3 text-xl" htmlFor="fullName">
                  {t("label_full_name")}
                </Label>
                <Input
                  className="h-12 bg-white"
                  id="fullName"
                  name="fullName"
                  placeholder={t("label_full_name")}
                />
              </div>
              <div>
                <Label className="mb-3 text-xl" htmlFor="email">
                  {t("label_email")}
                </Label>
                <Input
                  className="h-12 bg-white"
                  id="email"
                  name="email"
                  placeholder={t("label_email")}
                />
              </div>
              <div>
                <Label className="mb-3 text-xl" htmlFor="message">
                  {t("label_message")}
                </Label>
                <Textarea
                  className="bg-white h-36"
                  id="message"
                  name="message"
                  placeholder={t("label_message")}
                />
              </div>
              <Button className="p-6 mr-auto text-lg w-fit">
                {t("button_send")}
              </Button>
            </form>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
