"use client";

import Image from "next/image";

const DisplayPictureComponent = () => {
  return (
    <figure className="relative">
      <div
        className="relative w-60 h-72 sm:w-72 sm:h-[22rem] lg:w-[19rem] lg:h-[24rem] overflow-hidden"
        style={{
          background: `rgb(var(--surface-secondary))`,
          border: `1px solid rgb(var(--border))`,
        }}
      >
        <Image
          src="/abdulrehman.png"
          alt="Abdul Rehman — Senior Frontend Engineer"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 304px"
        />
      </div>
      <figcaption
        className="mt-2 font-mono text-[0.68rem] flex items-center justify-between"
        style={{ color: `rgb(var(--text-tertiary))` }}
      >
        <span>FIG.01 — Islamabad, PK</span>
        <span>2026</span>
      </figcaption>
    </figure>
  );
};

export default DisplayPictureComponent;
