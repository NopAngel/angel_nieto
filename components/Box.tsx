import Link from "next/link";
import Image from "next/image";

export default function Box({
  Title,
  Icon,
  Subdescription,
  Description,
  Github,
  LinkPage,
  Capture,
  Spotlight,
  Color,
}: {
  Title: string;
  Icon: string;
  Subdescription: string;
  Description: string;
  Github: string;
  LinkPage: string;
  Capture: string;
  Spotlight: string;
  Color: string;
}) {
  return (
    <article
      className={`w-full flex justify-between xl:flex-row flex-col relative p-20`}
    >
      <div className="absolute right-0 -z-20">
        <img
          src={Spotlight}
          alt="spotlight"
          className="bg-gradient-to-tr from-transparent to-neutral-950"
        />
      </div>
      <section className="xl:w-[45%] p-5">
        <header>
          <div>
            <Image src={Icon} alt={Title} width={50} height={50} />
          </div>
          <h1 className="text-xl font-semibold p-2">{Title}</h1>
          <section className="*:p-5 text-[15px] opacity-80">
            <p>{Description}</p>
            <p>{Subdescription}</p>
          </section>
          <footer className="mt-20 grid grid-cols-2 justify-between  backdrop-blur-lg p-10">
            <Link href={Github}>
              <Image
                width={25}
                height={25}
                alt="GitHub"
                src="/icons/github.svg"
              />
            </Link>
            <Link href={LinkPage}>
              <Image
                width={25}
                height={25}
                alt="Arrow Up"
                src="/icons/arrow-up.png"
              />
            </Link>
          </footer>
        </header>
      </section>
      <section>
        <img
          src={Capture}
          width={900}
          height={900}
          alt={Title}
          className="p-5 rounded-[60px]"
        />
      </section>
    </article>
  );
}
