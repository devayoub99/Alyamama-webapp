import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppContext from "../context/app-context";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  params: { locale: string };
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
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppContext>{children}</AppContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
