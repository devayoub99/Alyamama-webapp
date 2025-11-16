import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import LogoWithText from "@/public/logo-with-text.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("home");

  return (
    <div className="container mx-auto bg-amber-50">
      <div className="h-[140] flex items-center mx-auto ">
        <div className="flex-1">
          <Image
            src={LogoWithText}
            alt="Alyamama Insurance"
            width={270}
            height={67}
          />
        </div>
        <div className="flex justify-around flex-4">
          <NavigationMenu>
            <NavigationMenuList dir="rtl">
              <NavigationMenuItem>
                <NavigationMenuLink href="/s">
                  {t("homePage")}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/s">
                  {t("aboutUs")}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("ourServices")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/s">
                    adsasdfsfdasfdasdfasdfsdf
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/s">
                  {t("contactUs")}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
