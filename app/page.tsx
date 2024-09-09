import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

import FooterTwo from "@/components/sections/FooterTwo";
import Home from "@/components/sections/Home";
import Project from "@/components/sections/Project";

import { IconHome, IconMessage, IconTool, IconUser } from "@tabler/icons-react";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#project",
      icon: <IconTool className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main>
      <Toaster />

      <section>
        <Home />
        <About />
        <Project />
        <Contact />
      </section>
      <footer>
        <FooterTwo />
      </footer>
    </main>
  );
}
