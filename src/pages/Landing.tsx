import Partners from "../components/Landing/Section/Partners";
import Header from "../components/Landing/Section/Header";
import Hero from "../components/Landing/Section/Hero";
import Features from "../components/Landing/Section/FeaturesSection";
import FAQ from "../components/Landing/Section/FAQ";
import Pricing from "../components/Landing/Section/Pricing";
import CTA from "../components/Landing/Section/CTA";

const Landing = () => {
  return (
    <>
      <div className="pointer-events-none fixed z-0 flex min-h-screen w-screen justify-center">
        <div className="absolute inset-0 bg-[url('assets/grid.svg')] opacity-25"></div>
        <img
          className="absolute top-32 z-10 h-[800px] scale-150 opacity-15 md:scale-100"
          src="imgs/mesh.svg"
          alt="graphics"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-c from-transparent via-transparent to-white"></div>
      </div>
      <div className="relative z-20">
        <Header />
        <Hero />
        <Partners />
        <Features />
        <FAQ />
        <Pricing />
        <CTA />
        <div className="bg-black p-4 text-center text-sm leading-8 text-white">
          <p>©️ Copyright 2024, All rights reserved.</p>
          <div className="text-sm">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
