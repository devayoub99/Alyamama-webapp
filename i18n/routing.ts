import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  localePrefix: "as-needed", // or 'always' if you want /en/page format
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
