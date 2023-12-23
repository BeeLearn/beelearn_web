import React from "react";
import Image from "next/image";

import { testimonials } from "@/data";

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
      <div className="max-h-xl relative flex flex-col overflow-scroll md:max-h-auto">
        <div className="marquee flex flex-nowrap items-center space-x-12 px-16 md:space-x-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="shrink-0 relative w-xs h-56 flex">
              <div className="absolute -left-4 bottom-4 z-20 rounded-full">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.fullName}
                  width={48}
                  height={48}
                  className="ring-4 ring-violet/50 rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-4 h-48 w-full rounded-xl z-10 stack-color-border px-8 py-4">
                <div className="flex-1">
                  <p className="text-sm line-clamp-4">{testimonial.content}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base">Oguntunde Caleb</p>
                  <small className="text-white/50 text-sm">@lyonkvalid</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
