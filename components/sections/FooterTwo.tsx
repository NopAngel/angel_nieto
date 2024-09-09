import Link from "next/link";
import React from "react";

export default function FooterTwo() {
  return (
    <footer className="flex justify-around items-center p-5 bg-neutral-950/55 border-t-2 border-t-neutral-800/55">
      <section>
        <h1 className="text-xl font-semibold">Angel Nieto.</h1>
      </section>
      <section>
        <nav>
          <ul className="grid grid-cols-1 *:grid *:grid-cols-2 gap-2 opacity-80">
            <div>
              <li>
                <Link href="https://twitter.com/Nop_angel">Twitter</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/noangel_brouh/">
                  Instagram
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="https://github/NopAngel">GitHub</Link>
              </li>
            </div>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
