import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Reveal({ children, className = "", delay = 0 }) {
  const element = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (element.current) observer.observe(element.current);
    return () => observer.disconnect();
  }, [reducedMotion]);
  return (
    <div
      ref={element}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
