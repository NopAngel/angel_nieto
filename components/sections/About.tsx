"use client";
import Image from "next/image";

import React, { useState } from "react";

export default function About() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("angelnieto1402@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section
      id="about"
      className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:p-20 p-12 *:bg-neutral-900/55 gap-5 *:rounded-lg"
    >
      <div>
        <div>
          <Image
            alt="Angel Nieto Avatar"
            src="/images/grid1.png"
            width={400}
            height={400}
            className="m-auto my-5"
          />
        </div>
        <div className="p-2">
          <h1 className="grid-title">Hi, My name is Angel Nieto</h1>
          <p className="grid-description">
            I am a Front-End developer with 2 years of experience, with some
            (very slight) knowledge of the BackEnd world. My first steps in the
            development world were with Unity to create video games (With C#),
            whose knowledge has been eliminated.
          </p>
        </div>
      </div>
      <div>
        <div>
          <Image
            alt="Angel Nieto Skills"
            src="/images/grid_languages.png"
            width={400}
            height={400}
            className="m-auto my-3"
          />
        </div>
        <div className="p-2">
          <h1 className="grid-title">Tech Stack</h1>
          <p className="grid-description">
            I have a lot of experience in creating websites/apps in hours! I
            create very difficult applications in hours (depending on the type
            of application)
          </p>
        </div>
      </div>

      <div>
        <div>
          <Image
            alt="Angel Nieto Skills"
            src="/images/grid3.png"
            width={500}
            height={500}
            className="my-[7em]"
          />
        </div>
        <div className="p-2">
          <h1 className="grid-title">My Passion for Coding</h1>
          <p className="grid-description">
            I am a Front-End Developer Passionate about web development. To
            complete my goals as a Developer.
          </p>
        </div>
      </div>

      <div className="xl:w-[1000px]">
        <div>
          <Image
            alt="Angel Nieto Skills"
            src="/images/grid4.png"
            width={400}
            height={400}
            className="m-auto"
          />
        </div>
        <div className="p-2 text-center">
          <p className="text-xs opacity-50">Contact Me.</p>
          <span
            className="flex items-center gap-2 justify-center my-2 hover:cursor-pointer hover:text-green-500 active:text-green-800"
            onClick={handleCopy}
          >
            <button>
              <img
                src="/icons/copy.svg"
                className="w-[20px] "
                alt="copy icon"
              />
            </button>
            <h1>angelnieto1402@gmail.com</h1>
          </span>
        </div>
      </div>
    </section>
  );
}
