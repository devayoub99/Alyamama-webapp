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
import { navigationLinks } from "@/lib";

const Header = () => {
  const t = useTranslations("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleCloseMobileMenu = () => setMobileMenuOpen(false);

  return (
    <section>
      <Container className="flex px-4 py-8 sm:px-6 lg:px-8" noPadding>
        {/* Logo */}
        <Link href="/" className="flex-1">
          <Image
            src={LogoWithText}
            alt="Alyamama Insurance"
            width={270}
            height={67}
            priority
            className="w-48 h-12 md:w-60 md:h-15"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList dir="rtl" className="flex flex-row">
            {navigationLinks?.map((item) =>
              item?.type === "simple" ? (
                <NavigationMenuLink key={item.id} href={item.link}>
                  {t(item.title)}
                </NavigationMenuLink>
              ) : (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuTrigger>{t(item.title)}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 w-[200px]">
                      {item?.subItems?.map((subItem) => (
                        <NavigationMenuLink
                          key={subItem.id}
                          href={subItem.link}
                          className="text-right"
                        >
                          {t(subItem.title)}
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}
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
              <NavigationMenu className="flex">
                <NavigationMenuList className="flex flex-col">
                  {navigationLinks?.map((item) =>
                    item?.type === "simple" ? (
                      <NavigationMenuLink key={item.id} href={item.link}>
                        {t(item.title)}
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuItem key={item.id}>
                        <NavigationMenuTrigger>
                          {t(item.title)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="px-4">
                          {item?.subItems?.map((subItem) => (
                            <NavigationMenuLink
                              key={subItem.id}
                              href={subItem.link}
                              className="text-sm text-right"
                            >
                              {t(subItem.title)}
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </Container>
        </div>
      )}
    </section>
  );
};

export default Header;
