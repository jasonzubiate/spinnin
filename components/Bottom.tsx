"use client";

import { GeistMono } from "geist/font/mono";
import { useEffect, useState } from "react";
import { getLocalTimeLosAngeles } from "@/utils";

export default function Bottom() {
  const [time, setTime] = useState<string>("");

  function updateLocalTime() {
    setTime(getLocalTimeLosAngeles());
  }

  useEffect(() => {
    function updateLocalTime() {
      setTime(getLocalTimeLosAngeles());
    }

    updateLocalTime();

    const intervalId = setInterval(updateLocalTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p
        className={`${GeistMono.className} text-demo-smoke font-light uppercase fixed bottom-0 left-0 text-sm z-50 m-4 md:m-6 mix-blend-difference`}
      >
        LA {time}
      </p>
      <a
        href="https://open.spotify.com/playlist/0NWr5vXsKMh7LEZeGNl7gB?si=db10c24b8ed1477e"
        target="_blank"
        className={`${GeistMono.className} text-demo-smoke font-light link-small z-50 fixed bottom-0 right-0 m-4 md:m-6 mix-blend-difference`}
      >
        <span className="link-bracket">{"["}</span>
        <span>Tunes</span>
        <span className="link-bracket">{"]"}</span>
      </a>
    </div>
  );
}
