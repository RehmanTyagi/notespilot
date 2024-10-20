import { motion } from "framer-motion";

const logos = [
  { name: "logo1", src: "partner-logo/brand-logo-1.svg" },
  { name: "logo2", src: "partner-logo/brand-logo-2.svg" },
  { name: "logo3", src: "partner-logo/brand-logo-3.svg" },
  { name: "logo4", src: "partner-logo/brand-logo-4.svg" },
  { name: "logo5", src: "partner-logo/brand-logo-5.svg" },
  { name: "logo7", src: "partner-logo/brand-logo-7.svg" },
  { name: "logo8", src: "partner-logo/brand-logo-8.svg" },
  { name: "logo8", src: "partner-logo/brand-logo-9.svg" },
  { name: "logo8", src: "partner-logo/brand-logo-10.svg" },
  { name: "logo8", src: "partner-logo/brand-logo-11.svg" },
];

const Partners = () => {
  return (
    <div className="relative grid gap-10 overflow-clip p-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] md:py-20">
      <motion.div
        animate={{
          x: ["0%", "-100%"],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        className="flex h-20 gap-10 md:gap-20"
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="inline-block h-full w-1/2 rounded-md border bg-white p-5 shadow-md md:w-1/4 lg:w-1/5 xl:w-1/6"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
