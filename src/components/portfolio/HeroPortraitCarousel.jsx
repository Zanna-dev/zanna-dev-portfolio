import { useEffect, useState } from "react";
import portraitPlum from "../../assets/images/noro-portrait-plum.png";
import portraitEditorial from "../../assets/images/noro-portrait-editorial.webp";
import portraitStudio from "../../assets/images/noro-portrait-studio.webp";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const slides = [
  {
    src: portraitPlum,
    alt: "Noro Pam in a plum blazer",
    label: "Plum blazer portrait",
  },
  {
    src: portraitEditorial,
    alt: "Noro Pam in a rust knit top",
    label: "Editorial portrait",
  },
  {
    src: portraitStudio,
    alt: "Noro Pam in a black dress",
    label: "Studio portrait",
  },
];

export function HeroPortraitCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || isPaused) return undefined;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  return (
    <section
      className="hero-carousel"
      aria-label="Portrait gallery"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="carousel-photos">
        {slides.map((slide, index) => (
          <img
            key={slide.label}
            className={`carousel-photo ${activeSlide === index ? "is-active" : ""}`}
            src={slide.src}
            alt={activeSlide === index ? slide.alt : ""}
            aria-hidden={activeSlide !== index}
          />
        ))}
      </div>
      <div className="carousel-meta">
        <span className="carousel-count">
          0{activeSlide + 1} / 0{slides.length}
        </span>
        <span aria-live="polite" className="carousel-label">
          {slides[activeSlide].label}
        </span>
      </div>
      <div className="carousel-controls" aria-label="Choose portrait">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`Show ${slide.label}`}
            aria-pressed={activeSlide === index}
            onClick={() => setActiveSlide(index)}
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  );
}
