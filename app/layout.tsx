import type { Metadata } from "next";
import "./globals.css";
import AppContext from "../context/app-context";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Tajawal } from "next/font/google";
import Image from "next/image";

import PhoneIcon from "@/public/icons/phone.svg";

const tajawal = Tajawal({
  // variable: tajawal,
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "شركة اليمامة للتأمين",
  description:
    "شركة اليمامة للتأمين تقدم خدمات تأمينية متكاملة في العراق منذ عام 2012، بموثوقية عالية ودعم سريع وشفاف.",
  keywords: [
    "تأمين العراق",
    "شركة تأمين",
    "شركة اليمامة للتأمين",
    "تأمين البصرة",
    "خدمات التأمين",
    "التأمين ضد الحريق",
    "تأمين السيارات",
    "التأمين الصحي",
    "تأمين الشركات",
    "وثائق التأمين",
    "أفضل شركة تأمين في العراق",
    // English Keywords
    "Insurance Iraq",
    "Iraq Insurance Company",
    "Insurance Services",
  ],
  openGraph: {
    title: "شركة اليمامة للتأمين | خدمات تأمينية موثوقة منذ 2012",
    description:
      "نقدّم أفضل خدمات التأمين للأفراد والشركات في العراق منذ عام 2012.",
    url: "https://alyamama-insurance.com",
    siteName: "شركة اليمامة للتأمين",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  // if (!routing.locales.includes(locale as any)) {
  //   notFound();
  // }

  const messages = await getMessages();

  const direction = locale === "en" ? "ltr" : "rtl";

  return (
    <html lang={locale} dir={direction} data-scroll-behavior="smooth">
      <body className={`${tajawal.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AppContext>
            <a
              href="tel: +964 783 4855 602"
              className="fixed z-10 flex items-center w-10 gap-2 p-2 overflow-hidden text-white transition-all duration-300 cursor-pointer hover:w-auto hover:px-4 bg-color1 rounded-xl bottom-8 left-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={PhoneIcon} alt="New" className="w-6 h-6 shrink-0" />
              <span className="transition-opacity duration-300 opacity-0 whitespace-nowrap hover:opacity-100">
                إتصل بنا
              </span>
            </a>

            {children}
          </AppContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
