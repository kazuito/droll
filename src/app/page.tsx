"use client";

import { useState } from "react";
import { Howl } from "howler";
import clsx from "clsx";

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
          "py-4 px-10 rounded-full font-semibold border-2 border-white",
          rolling
            ? "bg-transparent"
            : "bg-white text-black"
        )}
        onClick={rolling ? stopRolling : startRolling}
      >
        {rolling ? "STOP" : "START"}
      </button>
    </main>
  );
}
