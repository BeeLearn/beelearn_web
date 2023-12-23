import { forwardRef } from "react";
import Image from "next/image";

import { IlGroupUsers } from "@/assets";

export default forwardRef<HTMLDivElement>(function HomeQuizSection(props, ref) {
  return (
    <div
      ref={ref} 
      className="relative flex flex-col h-lg bg-amber-400 py-16">
      <div className="self-center flex flex-col space-y-4 z-10 px-8 md:w-xl">
        <h1 className="text-6xl font-extrabold first-letter:uppercase">
          not sure where to start?
        </h1>
        <p>
          This short quiz will sort you out. Answer a few simple questions to
          get personal career advice and course recommendations.
        </p>
        <button className="self-start w-48 btn btn-primary-alt">
          Start quiz
        </button>
      </div>
      <Image
        src={IlGroupUsers}
        alt="Group users"
        className="absolute bottom-0 h-64 object-cover z-0 md:h-80"
      />
    </div>
  );
});
