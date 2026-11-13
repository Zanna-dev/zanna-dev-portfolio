import { useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function MagneticLink({ className = "", children, ...props }) {
  const link = useRef(null);
  const reducedMotion = useReducedMotion();
  
  const move = (event) => {
    if (reducedMotion || !link.current) return;
    const box = link.current.getBoundingClientRect();
    link.current.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * 0.12}px, ${(event.clientY - box.top - box.height / 2) * 0.12}px)`;
  };

  return (
    <a
      ref={link}
      className={`magnetic-link ${className}`}
      onPointerMove={move}
      onPointerLeave={() => {
        if (link.current) link.current.style.transform = "";
      }}
      {...props}
    >
      {children}
    </a>
  );
}
