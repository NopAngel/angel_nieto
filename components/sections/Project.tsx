import React from "react";
import Box from "../Box";

export default function Project() {
  const projects = [
    {
      id: 1,
      capture: "/images/projects/project1.png",
      title: "Spotify Clone",
      icon: "/icons/project1.svg",
      color: "emerald-500",

      description:
        "This is a Clone of Spotify made for educational purposes, I made this clone since I had finished watching a Svelte course (The Spotify is completely made by me.), Although it is not THAT complete, but it defends itself by being a Clone.",
      subdescription:
        "As already said, this clone is made for educational purposes and learning purposes, since it is a very easy application to RECREATE.",
      github: "https://github.com/NopAngel/spotify-app",
      link: "https://spotclone-app.vercel.app/",
      spotlight: "/images/spotlight2.png",
    },
    {
      id: 2,
      capture: "/images/projects/project3.png",
      title: "Iphone Website",
      icon: "/icons/project2.svg",
      color: "[#000]",

      description:
        "This is a landing page (for educational purposes) of the official iPhone website, it is very convenient to use. And take the opportunity to improve it to make the page easier to understand, it is somewhat incomplete but it is understandable and attractive to the eye.",
      subdescription:
        "It is made for educational purposes, and for ME to continue learning more about React.js and thus have much more experience in the Framework.",
      github: "https://github.com/NopAngel/iphone-website",
      link: "https://google.com/",
      spotlight: "/images/spotlight3.png",
    },
    {
      id: 3,
      capture: "/images/projects/project2.png",
      title: "Emojix Website",
      icon: "/icons/project3.png",
      color: "orange-500",

      description:
        "This is my application (which is still in Beta) to have Emojis, for now it does not have a Database, but as said it is still in beta and many more things are missing, This application is going to have an API, an Emoji Search engine, and so on!",
      subdescription:
        "This mentioned application has a long future ahead of it, but it is still in development. IT IS A VERY BIG PROJECT.!!!",
      github: "https://github.com/NopAngel/emojix",
      link: "https://emojixx.vercel.app/",
      spotlight: "/images/spotlight1.png",
    },
  ];
  return (
    <section id="project">
      <h1 className="p-20 text-2xl font-semibold">My Work</h1>
      <section>
        {projects?.map(
          ({
            title,
            icon,
            description,
            subdescription,
            github,
            link,
            capture,
            spotlight,
            id,
          }: any) => (
            <Box
              LinkPage={link}
              Title={title}
              Icon={icon}
              Description={description}
              Subdescription={subdescription}
              Github={github}
              Capture={capture}
              Spotlight={spotlight}
              key={id}
            />
          )
        )}
      </section>
    </section>
  );
}
