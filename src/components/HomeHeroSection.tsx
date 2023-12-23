import Image from "next/image";
import Link from "next/link";

import { IlFeatures } from "@/assets";

export default function HomeHeroSection() {
  return (
    <div className="flex flex-col space-y-16 px-8 md:flex-row md:space-x-16 md:space-y-0 md:px-32">
      <div className="flex-1 flex flex-col space-y-4 lt-md:items-center lt-md:text-center">
        <h1 className="text-4xl font-extrabold capitalize">
          The best way to learn through
          <span className="text-violet-700 animate-pulse">
            &nbsp;bite sized learning
          </span>
        </h1>
        <p className="text-stone-700">
          Boost your skills through online educational platform for digital
          skills, all conveniently available in one comprehensive learning
          resource.
        </p>
        <div className="flex flex-col space-y-4 ">
          <Link 
            href="https://auth.usebeelearn.com/sign-up/?source=landing-page"
            target="_blank"
            className="w-64 btn btn-primary">Get Started</Link>
          <Link 
            href="https://auth.usebeelearn.com/?source=landing-page"
            target="_blank"
            className="w-64 btn btn-outline-primary">
            Already have an account?
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end justify-end">
        <Image src={IlFeatures} alt="BeeLearn Features" />
      </div>
    </div>
  );
}
