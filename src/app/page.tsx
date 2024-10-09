"use client";

import { useState } from "react";
import { Howl } from "howler";
import clsx from "clsx";
import Link from "next/link";

const sounds = {
  drumroll: new Howl({
    src: ["/drumroll.wav"],
    loop: true,
  }),
  cymbal: new Howl({
    src: ["/cymbal.wav"],
  }),
};

export default function Home() {
  const [rolling, setRolling] = useState(false);

  const startRolling = () => {
    setRolling(true);
    sounds.drumroll.play();
  };

  const stopRolling = () => {
    setRolling(false);
    sounds.drumroll.stop();
    sounds.cymbal.play();
  };

  return (
    <main className="grid min-h-[100dvh] place-content-center">
      <button
        className={clsx(
          "py-4 px-10 rounded-full font-semibold border border-white transition-transform hover:scale-[1.03] active:scale-100",
          rolling ? "bg-transparent" : "bg-white text-black"
        )}
        onClick={rolling ? stopRolling : startRolling}
      >
        {rolling ? "STOP" : "START"}
      </button>
      <div className="fixed right-4 left-4 bottom-4 text-center">
        <div className="text-sm text-neutral-800">
          Created by <Link className="hover:text-neutral-700 transition-colors" href="https://kazumaito.com">
            Kazuma Ito
          </Link>
        </div>
      </div>
    </main>
  );
}
