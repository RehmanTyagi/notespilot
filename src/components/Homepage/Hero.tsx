import LinkBtn from "../common/LinkBtn";
import { TiTick } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:p-10">
      <div className="relative flex flex-col gap-5 p-5 py-10">
        {/* shape start */}
        <div className="shape absolute right-10 top-10 h-10 w-10 rounded-full bg-primary lg:top-6 lg:h-28 lg:w-28"></div>
        <div className="shape absolute left-5 top-1/3 h-10 w-10 rounded-full bg-dark lg:h-14 lg:w-14"></div>
        {/* shape end */}
        <div className="relative mb-10 w-fit rounded-3xl bg-dark p-2 px-4 text-sm font-medium capitalize lg:px-10">
          <p className="leading-6 tracking-wide text-light">
            Adopt organized learning
          </p>
          <img
            src="vectors/sticky-note.png"
            className="absolute -right-4 -top-3 h-8 rotate-[20deg] fill-primary"
          />
        </div>
        <h1 className="scale-105 font-serif text-4xl sm:text-7xl lg:text-5xl xl:text-7xl">
          <div className="mb-3 flex justify-center gap-3">
            <span className="text-red-500">
              Create
              <span className="ml-1 inline-block h-2 w-2 rounded-sm bg-red-500 p-1"></span>
            </span>
            <span className="dark:text-white">
              Organize
              <span className="ml-1 inline-block h-2 w-2 rounded-sm bg-black p-1 dark:bg-white"></span>
            </span>
          </div>
          <div className="flex justify-center gap-5">
            <span className="dark:text-white">
              Made
              <span className="ml-1 inline-block h-2 w-2 rounded-sm bg-black p-1 dark:bg-white"></span>
            </span>
            <div className="relative -rotate-6 border-2 border-yellow-400 p-1.5">
              {/* design dots start here */}
              <div className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-yellow-400"></div>
              <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-yellow-400"></div>
              <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-yellow-400"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-yellow-400"></div>
              {/* design dots end here */}
              <span className="text-yellow-400">
                Ezy
                <span className="ml-1 inline-block h-2 w-2 rounded-sm bg-yellow-400 p-1"></span>
              </span>
            </div>
          </div>
        </h1>
        <p className="text-dark/70">
          "Get organized with NotesPilot for just ₹20/week or ₹80/month. Access
          premium features like cloud sync, advanced search, and custom
          templates. Start today and transform your workflow!"
        </p>
        <div className="mt-5 flex flex-col gap-2 md:gap-4">
          <LinkBtn className="text-sm" to="/login">
            Try now for free
          </LinkBtn>
          <LinkBtn
            className="border-2 border-primary bg-transparent text-sm !text-primary"
            to="/login"
          >
            See how it works
          </LinkBtn>
        </div>
        <div className="flex items-center justify-center gap-3 text-sm">
          <TiTick
            className="rounded-full !bg-primary bg-red-400 p-1 text-white"
            size={25}
          />
          <p className="flex items-center gap-1 dark:text-white">
            No<i className="mb-1">💳</i>card required!, Cancel ⌚anytime
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[auto,1fr] grid-rows-[145px,1fr] px-10 max-xl:scale-75 max-lg:scale-100 max-lg:pb-20 max-lg:pt-10 max-sm:hidden">
        <div className="flex h-36 w-56 flex-col items-center justify-center rounded-full bg-primary/90">
          <h1 className="text-7xl">84%</h1>
          <p>Satisfied Users</p>
        </div>
        <div className="relative row-span-2 w-60">
          {/* shape start */}
          <img
            className="absolute -right-28 top-0 z-10 h-36"
            src="vectors/approved.png"
          />
          <img
            className="absolute -right-28 top-44 h-36"
            src="vectors/wave.png"
          />
          {/* shape end */}
          <div className="relative h-full overflow-hidden rounded-full">
            <div className="absolute bottom-0 left-2/4 z-10 flex h-52 w-full -translate-x-2/4 flex-col items-center justify-center rounded-full bg-white text-center">
              <h1 className="text-8xl text-primary">3k</h1>
              <p className="px-10 text-lg font-semibold">
                Active Registered Users
              </p>
            </div>
            <img
              className="relative top-20 h-[400px] w-[500px] scale-150"
              src="imgs/user.jpg"
            />
          </div>
        </div>
        <div className="w-60 overflow-hidden rounded-full">
          <img className="h-full w-full" src="imgs/laptop.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
