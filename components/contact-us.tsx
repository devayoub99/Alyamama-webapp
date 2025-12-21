"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { useEffect, useRef } from "react";

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
import GradientText from "./gradient-text";
import { submitContactForm } from "@/app/actions/contact";

const ContactUs = () => {
  const t = useTranslations("home");
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    message: "",
    fullName: "",
  });

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      // Optional: Scroll to top of form or show a toast notification
    }
  }, [state.success]);

  return (
    <section>
      <Container className="flex flex-col scroll-m-2" id="contact-us">
        <div className="gap-4 flex-2 md:mb-14">
          <span className="flex justify-center">{t("start_with_us_cta")}</span>

          <GradientText
            Element="h2"
            text={t("get_comprehensive_coverage")}
            classNames="mt-2 text-2xl font-bold md:text-[40px] text-center"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <section className="flex-1 py-8 md:py-10">
            <GradientText
              Element="h3"
              text={t("stay_in_touch")}
              classNames="text-2xl font-medium text-center"
            />
            <div className="flex flex-col gap-6 pt-8 pb-8 md:pt-20">
              <ContactUsCard
                title={t("label_phone_number")}
                Link={
                  <a
                    href="tel: +964 783 4855 602"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +964 783 4855 602
                  </a>
                }
                Image={<Image src={PhoneIcon} alt="New" className="w-6" />}
              />
              <ContactUsCard
                title={t("label_email")}
                Link={
                  <a
                    href="mailto:info@alyamama-iq.com"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@alyamama-iq.com
                  </a>
                }
                Image={<Image src={EmailIcon} alt="New" className="w-6" />}
              />
              <ContactUsCard
                title={t("label_address")}
                Link={
                  <a
                    href="https://maps.app.goo.gl/97pScemvSx8kVkCb7"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("address_detail")}
                  </a>
                }
                Image={<Image src={MapIcon} alt="New" className="w-6" />}
              />
              <ContactUsCard
                title={t("label_working_hours")}
                text={t("working_hours_detail")}
                Image={
                  <Image src={WorkingHoursIcon} alt="New" className="w-6" />
                }
              />
            </div>
          </section>
          <section className="flex-1 py-10 px-10 bg-[#F3F5FC] rounded-xl">
            <GradientText
              Element="h3"
              text={t("contact_message")}
              classNames="text-2xl font-medium text-center"
            />

            <form
              ref={formRef}
              action={formAction}
              className="flex flex-col gap-6 pt-20 pb-8"
            >
              <div>
                <Label className="mb-3 text-xl" htmlFor="fullName">
                  {t("label_full_name")}
                </Label>
                <Input
                  className="h-12 bg-white"
                  id="fullName"
                  name="fullName"
                  placeholder={t("label_full_name")}
                  required
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
                  type="email"
                  placeholder={t("label_email")}
                  required
                  defaultValue="admin@devayb.com"
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
                  required
                  defaultValue="Hello world"
                />
              </div>

              {state.message && (
                <div
                  className={`p-4 rounded-lg ${
                    state.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {state.message}
                </div>
              )}

              <Button type="submit" className="p-6 mr-auto text-lg w-fit">
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
