import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24"
    >
      {/* Logo */}
      <div className="logo absolute top-10 left-17 z-50">
        <img
          src={user_info.logo.photo}
          alt="AS logo"
          className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full shadow-lg"
        />
      </div>

      <div className="self-center w-full">
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          {/* LEFT CONTENT */}
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>

            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE WITH TOOLTIP */}
          <div className="hidden lg:block w-[480px] self-center relative group">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Ansh sisodiya photo"
            />

            {/* Professional Tooltip */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-4
  opacity-0 group-hover:opacity-100 group-hover:translate-y-1
  transition-all duration-300 pointer-events-none"
            >
              <div
                className="relative bg-white dark:bg-zinc-900
    border border-zinc-200 dark:border-zinc-700
    shadow-xl rounded-xl px-4 py-2"
              >
                {/* Arrow */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2
      w-4 h-4 bg-white dark:bg-zinc-900
      border-l border-t border-zinc-200 dark:border-zinc-700
      rotate-45"
                ></div>

                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 whitespace-nowrap">
                  Available for opportunities & collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
