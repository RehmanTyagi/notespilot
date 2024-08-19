import LinkBtn from '../common/LinkBtn'
import { TiTick } from 'react-icons/ti'

const Hero = () => {
  return (
<div className="lg:grid lg:grid-cols-2 lg:p-10">
        <div className="relative p-5 py-10 flex flex-col gap-5">
          {/* shape start */}
          <div className="bg-primary lg:top-6 shape absolute h-10 w-10 lg:h-28 lg:w-28 top-10 right-10 rounded-full"></div>
          <div className="bg-dark shape absolute h-10 w-10 lg:h-14 lg:w-14 top-1/3 left-5 rounded-full"></div>
          {/* shape end */}
          <div className="relative w-fit mb-10 rounded-3xl lg:px-10 bg-dark p-2 px-4 text-sm font-medium capitalize">
            <p className="text-light leading-6 tracking-wide">Adopt organized learning</p>
            <img
              src="vectors/sticky-note.png"
              className="absolute -right-4 -top-3 h-8 rotate-[20deg] fill-primary"
            />
          </div>
          <h1 className="text-4xl scale-105 sm:text-7xl lg:text-5xl xl:text-7xl font-serif">
            <div className="flex justify-center gap-3 mb-3">
            <span className="text-red-500">Create<span className="bg-red-500 ml-1 inline-block p-1 h-2 rounded-sm w-2"></span></span>
            <span className="dark:text-white">Organize<span className="bg-black dark:bg-white ml-1 inline-block p-1 h-2 rounded-sm w-2"></span></span>
            </div>
            <div className="flex gap-5 justify-center">
            <span className="dark:text-white">Made<span className="bg-black dark:bg-white ml-1 inline-block p-1 h-2 rounded-sm w-2"></span></span>
            <div className="border-2 p-1.5 -rotate-6 border-yellow-400 relative">
              {/* design dots start here */}
              <div className=" bg-yellow-400 w-2 rounded-full -left-1 -top-1 absolute h-2"></div>
              <div className=" bg-yellow-400 w-2 rounded-full -right-1 -top-1 absolute h-2"></div>
              <div className=" bg-yellow-400 w-2 rounded-full -left-1 -bottom-1 absolute h-2"></div>
              <div className=" bg-yellow-400 w-2 rounded-full -right-1 -bottom-1 absolute h-2"></div>
              {/* design dots end here */}
            <span className="text-yellow-400">Ezy<span className="bg-yellow-400 ml-1 inline-block p-1 h-2 rounded-sm w-2"></span></span>
            </div>
            </div>
          </h1>
          <p className="text-dark/70">
          "Get organized with NotesPilot for just ₹20/week or ₹80/month. Access premium features like cloud sync, advanced search, and custom templates. Start today and transform your workflow!"
          </p>
          <div className="flex gap-2 mt-5 md:gap-4 flex-col">
            <LinkBtn className="text-sm" to="/login">Try now for free</LinkBtn>
            <LinkBtn className="text-sm !text-primary bg-transparent border-2 border-primary" to="/login">See how it works</LinkBtn>
          </div>
          <div className="flex text-sm gap-3 justify-center items-center">
            <TiTick className="bg-red-400 p-1 rounded-full text-white !bg-primary" size={25} />
            <p className="flex dark:text-white items-center gap-1">
               No<i className="mb-1">💳</i>card required!, Cancel ⌚anytime
            </p>
          </div>
        </div>
        <div className="px-10  max-lg:scale-100 max-xl:scale-75 max-lg:pt-10 max-lg:pb-20 max-sm:hidden grid grid-cols-[auto,1fr] grid-rows-[145px,1fr]">
          <div className="h-36 w-56 flex flex-col justify-center items-center bg-primary/90 rounded-full">
            <h1 className="text-7xl">84%</h1>
            <p>Satisfied Users</p>
          </div>
          <div className="row-span-2 w-60 relative">
             {/* shape start */}
           <img className="absolute top-0 h-36 -right-28 z-10" src="vectors/approved.png"/>
           <img className="absolute top-44 h-36 -right-28" src="vectors/wave.png"/>
            {/* shape end */}
          <div className="rounded-full h-full relative overflow-hidden">
            <div className="bg-white w-full h-52 rounded-full flex flex-col justify-center items-center absolute bottom-0 text-center left-2/4 -translate-x-2/4 z-10">
           <h1 className="text-8xl text-primary">3k</h1>
           <p className="text-lg font-semibold px-10">Active Registered Users</p>
            </div>
            <img className="h-[400px] relative top-20 scale-150 w-[500px]" src="imgs/user.jpg"/>
          </div>
          </div>
          <div className="w-60 rounded-full overflow-hidden">
            <img className="h-full w-full" src="imgs/laptop.jpg"/>
          </div>
        </div>
        </div>  )
}

export default Hero
