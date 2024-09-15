"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageToggle({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative size-72 aspect-square xl:size-96">
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}/imgs/${images[currentImage]}`}
        alt={name}
        fill
        sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
