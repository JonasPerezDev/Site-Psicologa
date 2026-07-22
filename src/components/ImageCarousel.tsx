"use client";

import { useEffect, useState } from "react";

/*
  PENDÊNCIA: quando houver mais fotos profissionais, adicione/troque aqui.
  Cada imagem deve ficar em public/images/.
*/
const images = [
  { src: "/images/camila-1.jpg", alt: "Camila Perez, psicóloga" },
  { src: "/images/camila-2.jpg", alt: "Camila Perez, psicóloga, em pé" },
  { src: "/images/camila-3.jpg", alt: "Camila Perez, psicóloga, sorrindo" },
];

const INTERVAL_MS = 3000;

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-soft"
      role="img"
      aria-label={images[index].alt}
    >
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Sutil gradiente inferior para contraste com possíveis legendas futuras */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
