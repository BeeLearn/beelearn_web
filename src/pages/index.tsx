import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import HomeHeroSection from "@/components/HomeHeroSection";
import HomeCategorySection from "@/components/HomeCategorySection";
import HomeLearnerChoiceReason from "@/components/HomeLearnerChoiceReason";

import HomeQuizSection from "@/components/HomeQuizSection";
import HomeTestimonialSection from "@/components/HomeTestimonialSection";
import HomeFaqSection from "@/components/HomeFaqSection";
import { intersectionTrigger } from "@/scripts";

export default function IndexPage() {
  const [mounted, setMounted] = useState(false);

  const quizRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    headerRef.current = document.querySelector("header");
    footerRef.current = document.querySelector("footer");
    triggerRef.current = document.querySelector("#header-collapse-trigger");

    return intersectionTrigger(
      triggerRef.current!,
      [quizRef.current!, footerRef.current!],
      (intersect) => {
        if (intersect) headerRef.current!.classList.add("-translate-y-50");
        else headerRef.current!.classList.remove("-translate-y-50");
      }
    );
  }, []);

  return (
    <>
      <HomeHeroSection />
      <HomeCategorySection />
      <HomeLearnerChoiceReason />
      <HomeQuizSection ref={quizRef} />
      <HomeFaqSection />

      {mounted &&
        createPortal(
          <HomeTestimonialSection />,
          document.querySelector("#footer")!
        )}
    </>
  );
}
