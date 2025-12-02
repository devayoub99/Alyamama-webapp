import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "./container";
import GetStatredCard from "./get-started-step";

import InitialMeetingImage from "@/public/get-started-with-us/Initial-meeting.jpeg";
import BusinessPlanningImage from "@/public/get-started-with-us/Business-planning.jpeg";
import InsuranceActivationImage from "@/public/get-started-with-us/Insurance-activation.jpeg";
import VideoLogo from "./VideoLogo";

const GetStarted = () => {
  const t = useTranslations("home");

  return (
    <section id="get-started">
      <Container className="flex flex-col" id="why-choose-us">
        <div className="gap-4 flex-2">
          <span className="flex justify-center">
            {t("how_to_start_with_us")}
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-[40px] text-center">
            {t("how_to_get_insured")}
          </h2>
        </div>
        <VideoLogo />
        <div className="flex flex-col gap-14 md:gap-18">
          <GetStatredCard
            counter="01"
            title={t("step_consultation_and_assessment")}
            Image={
              <div className="flex-1">
                <Image
                  src={InitialMeetingImage}
                  alt={t("step_consultation_and_assessment")}
                  className="rounded-2xl sm:w-full"
                />
              </div>
            }
            subSteps={[
              {
                subTitle: t("step_initial_meeting_title"),
                subText: t("step_initial_meeting_desc"),
              },
              {
                subTitle: t("step_needs_assessment_title"),
                subText: t("step_needs_assessment_desc"),
              },
            ]}
          />

          <GetStatredCard
            counter="02"
            title={t("step_custom_plan_selection")}
            Image={
              <div className="flex-1 order-1 md:-order-1">
                <Image
                  src={BusinessPlanningImage}
                  alt={t("step_custom_plan_selection")}
                  className="rounded-2xl sm:w-full"
                />
              </div>
            }
            subSteps={[
              {
                subTitle: t("step_plan_options_title"),
                subText: t("step_plan_options_desc"),
              },
              {
                subTitle: t("step_review_and_decision_title"),
                subText: t("step_review_and_decision_desc"),
              },
            ]}
          />

          <GetStatredCard
            counter="03"
            title={t("step_enrollment_and_activation")}
            Image={
              <div className="flex-1">
                <Image
                  src={InsuranceActivationImage}
                  alt={t("step_consultation_and_assessment")}
                  className="rounded-2xl sm:w-full"
                />
              </div>
            }
            subSteps={[
              {
                subTitle: t("step_application_process_title"),
                subText: t("step_application_process_desc"),
              },
              {
                subTitle: t("step_coverage_activation_title"),
                subText: t("step_coverage_activation_desc"),
              },
            ]}
          />

          <p className="text-2xl font-bold text-center md:text-4xl text-color1">
            {t("tagline_everything_secured")}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
