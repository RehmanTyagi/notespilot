import Button from "../../common/Button";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="px-5 py-10 md:px-20 md:py-32">
      <div className="w-full rounded-xl bg-gradient-to-l from-[#1dd3b0] to-[#02c39a]">
        <div className="flex flex-col gap-5 p-5 text-center md:mx-auto md:px-10 md:py-14 xl:w-2/5">
          <h1 className="text-xl font-medium text-white md:text-3xl">
            Boost Your Productivity with NotesPilot
          </h1>
          <p className="text-sm leading-6 tracking-wide text-gray-100 md:text-base">
            Join over 1,000+ professionals organizing their ideas effortlessly!
          </p>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
            <Button className="bg-white !text-black md:w-44" type="button">
              Try for free
            </Button>
            <Button className="gap-2 bg-transparent md:w-44" type="button">
              Contact Sales{" "}
              <span className="rounded-full bg-black p-1">
                <FaArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
