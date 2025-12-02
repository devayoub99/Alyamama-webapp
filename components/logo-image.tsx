import Image from "next/image";

const LogoImage = ({ src, alt, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="transition-all rounded-full cursor-pointer hover:scale-110"
      {...props}
    />
  );
};

export default LogoImage;
