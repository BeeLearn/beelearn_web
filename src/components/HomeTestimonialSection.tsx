import React from "react";

export default function HomeTestimonialSection() {
  return (
    <div>
      <div className="p-8 text-center">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          Don&apos;t take our word. Take theirs
        </h1>
        <p className="text-white/80">
          Here are some reviews from some of our learners.
        </p>
      </div>
      <div className="max-h-xl relative flex flex-col overflow-hidden md:max-h-auto">
        <div className="marquee flex flex-nowrap items-center space-x-8 px-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="shrink-0 relative w-xs h-56 flex">
              <div className="absolute -left-2 bottom-6 w-12 h-12 bg-red-200 z-20 rounded-full" />
              <div className="h-46 w-full rounded-xl z-10 stack-color-border text-8xl">
                  {index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
