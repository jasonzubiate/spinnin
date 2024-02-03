"use client";

import { useEffect, useState } from "react";
import { getLocalTimeLosAngeles } from "@/utils";

export default function Bottom() {
  const [time, setTime] = useState<string>("");

  function updateLocalTime() {
    setTime(getLocalTimeLosAngeles());
  }

  useEffect(() => {
    updateLocalTime();

    const intervalId = setInterval(updateLocalTime, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex w-full justify-end p-4 fixed bottom-0 md:justify-between">
      <p className="geist uppercase hidden md:flex">Los Angeles ({time})</p>
      <a
        href="https://open.spotify.com/playlist/0NWr5vXsKMh7LEZeGNl7gB?si=db10c24b8ed1477e"
        target="_blank"
        className="geist uppercase text-xs md:text-base"
      >
        Tunes
      </a>
    </div>
  );
}
