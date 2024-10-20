import Button from "../../common/Button";

const Hero = () => {
  return (
    <section id="landing">
      <div className="container m-auto px-5 py-10 text-center md:max-w-4xl md:px-20 md:pt-32">
        <p className="mb-2">🚀 NotesPilot V0.1</p>
        <h1 className="text-xl">Organize, Write, Study Notes.</h1>
        <h1 className="font-heading text-3xl font-extrabold text-primary md:text-5xl">
          Study Or Work Effectively
        </h1>
        <p className="mt-5 text-sm md:mt-10 md:text-base">
          NotesPilot: Your Ultimate Note-Taking App for Effortless Organization
          and Productivity
        </p>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:gap-5">
          <Button type="button">Get Started</Button>
          <Button
            className="border border-primary bg-transparent !text-black"
            type="button"
          >
            Learn More
          </Button>
        </div>
        <div className="mt-10 overflow-clip rounded-xl border-4 md:mt-20">
          <img
            src="imgs/product.png"
            className="h-full w-full object-cover"
            alt="icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
