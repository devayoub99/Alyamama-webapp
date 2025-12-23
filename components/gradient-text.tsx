import { cn } from "@/lib/utils";

interface GradientTextProps {
  Element: React.ElementType;
  text: string;
  classNames?: string;
  theme?: "Primary" | "Secondary";
  withShadow?: boolean;
}

const GradientText = ({
  Element,
  text,
  classNames,
  theme = "Primary",
  withShadow = false,
}: GradientTextProps) => {
  // * Change the name
  let leadingSize = "leading-7";

  switch (Element) {
    case "h1":
    case "h2":
      leadingSize = "leading-18";
      break;
    case "h3":
      leadingSize = "leading-10";
  }

  return (
    <Element
      className={cn(
        "text-transparent bg-clip-text",
        classNames,
        leadingSize,
        theme === "Primary"
          ? "bg-text-gradient-indigo"
          : "bg-text-gradient-yellow"
      )}
      style={
        withShadow
          ? {
              textShadow:
                "3px 3px 0px rgba(75, 85, 99, 0.4), 6px 6px 0px rgba(75, 85, 99, 0)",
            }
          : undefined
      }
    >
      {text}
    </Element>
  );
};

export default GradientText;
