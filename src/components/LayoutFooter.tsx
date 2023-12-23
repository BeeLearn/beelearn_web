import { forwardRef } from "react";
import Image from "next/image";

import { socials } from "@/data";
import { IcLogo, IlStar } from "@/assets";
import { nunitoSans } from "@/fonts";
import { join } from "@/scripts";

export default forwardRef<HTMLElement>(function LayoutFooter(props, ref) {
  return (
    <footer
      ref={ref}
      className="relative overflow-y-hidden flex flex-col bg-footer"
    >
      <div id="footer"></div>
      <div className="flex flex-col space-y-16 text-white/80 p-8 md:px-32 z-10">
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <button className="bg-stone-900 px-6 py-2 rounded-full">
              Privacy
            </button>
            <button className="bg-stone-900 px-4 py-2 rounded-full">
              Terms
            </button>
            <button className="bg-stone-900 px-4 py-2 rounded-full">
              Careers
            </button>
          </div>
          <div className="flex space-x-4">
            {socials.map((social, index) => (
              <button key={index} className="bg-stone-900 p-1 rounded-full">
                <Image
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>
        </div>
        <hr className="border-dashed border-stone-700" />
        <div className="flex flex-col space-y-14">
          <div className="flex flex-col">
            <div className="flex space-x-2 items-center">
              <Image src={IcLogo} alt="Logo" className="w-8 h-8" />
              <p
                className={join(
                  nunitoSans.className,
                  "text-xl font-black text-white"
                )}
              >
                BeeLearn
              </p>
            </div>
            <p className="text-sm md:text-base">support@usebeelearn.com</p>
          </div>
          <div>
            <p>Built with love by Oasis</p>
          </div>
        </div>
      </div>
      <Image
        src={IlStar}
        alt="Star"
        className="absolute bottom-0 right-0 w-32 h-32"
      />
    </footer>
  );
});
