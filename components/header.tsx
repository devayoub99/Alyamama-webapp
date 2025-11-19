"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoWithText from "@/public/logo-with-text.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "./container";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleCloseMobileMenu = () => setMobileMenuOpen(false)

  return (
    <section>
      <Container className="flex px-4 py-8 sm:px-6 lg:px-8" noPadding>
        {/* Logo */}
        <div className="flex-1">
          <Image
            src={LogoWithText}
            alt="Alyamama Insurance"
            width={270}
            height={67}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuIndicator>asdfas</NavigationMenuIndicator>
          <NavigationMenuList dir="rtl" className="flex flex-row">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">{t("homePage")}</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about">
                {t("aboutUs")}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/news">
                {t("latestNews")}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("ourServices")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[200px]">
                  <li>
                    <NavigationMenuLink
                      href="/services/service-1"
                      className="block p-2 hover:bg-slate-100"
                    >
                      Service 1
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/services/service-2"
                      className="block p-2 hover:bg-slate-100"
                    >
                      Service 2
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/#contact-us">
                {t("contactUs")}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 transition-colors rounded-md lg:hidden hover:bg-accent"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t lg:hidden bg-background">
          <Container className="px-4 py-4 sm:px-6" noPadding>
            <nav className="flex flex-col space-y-1" dir="rtl">
              <a
                href="#"
                onClick={handleCloseMobileMenu}
                className="px-3 py-2 text-lg transition-colors rounded-md hover:bg-accent"
              >
                {t("homePage")}
              </a>

              <Link
                href="/about"
                onClick={handleCloseMobileMenu}
                className="px-3 py-2 text-lg transition-colors rounded-md hover:bg-accent"
              >
                {t("aboutUs")}
              </Link>

              <Link
                href="/news"
                onClick={handleCloseMobileMenu}
                className="px-3 py-2 text-lg transition-colors rounded-md hover:bg-accent"
              >
                {t("latestNews")}
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-lg transition-colors rounded-md hover:bg-accent"
                >
                  <span>{t("ourServices")}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="mt-1 mr-4 space-y-1">
                    <Link
                      href="/services/service-1"
                      onClick={handleCloseMobileMenu}
                      className="block px-3 py-2 text-base transition-colors rounded-md hover:bg-accent/50"
                    >
                      Service 1
                    </Link>
                    <Link
                      href="/services/service-2"
                      onClick={handleCloseMobileMenu}
                      className="block px-3 py-2 text-base transition-colors rounded-md hover:bg-accent/50"
                    >
                      Service 2
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact-us"
                onClick={handleCloseMobileMenu}
                className="px-3 py-2 text-lg transition-colors rounded-md hover:bg-accent"
              >
                {t("contactUs")}
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </section>
  );
};

export default Header;
