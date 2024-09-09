"use client";
import React from "react";

import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <section className="h-[60em] flex items-center justify-center">
      <div className="w-full text-center" ref={ref}>
        <h1 className="text-8xl font-bold">
          <span className="bg-gradient-to-b from-white/55 to-white text-transparent bg-clip-text">
            Angel
          </span>{" "}
          Nieto.
        </h1>
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Developer Front-End"
          description="Angel Nieto, the Developer who creates great websites and wonders with UI/UX. Dedicated to the design and creation of Effects."
        />
      </div>
    </section>
  );
}
