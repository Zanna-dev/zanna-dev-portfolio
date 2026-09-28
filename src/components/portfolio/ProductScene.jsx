import { useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const modes = [
  {
    label: "Build",
    title: "A clean system.",
    metric: "24",
    detail: "reusable components",
  },
  {
    label: "Refine",
    title: "A useful flow.",
    metric: "98%",
    detail: "intentional interactions",
  },
  {
    label: "Ship",
    title: "A confident release.",
    metric: "AA",
    detail: "accessible by default",
  },
];

export function ProductScene() {
  const [activeMode, setActiveMode] = useState(0);
  const reducedMotion = useReducedMotion();
  const active = modes[activeMode];
  
  return (
    <div
      className={`product-scene ${reducedMotion ? "reduce-scene" : ""}`}
      aria-label="Interactive product engineering visual"
    >
      <div className="scene-toolbar">
        <span className="scene-dot" />
        <span>noro / studio</span>
        <span className="scene-status">live</span>
      </div>
      <div className="scene-canvas">
        <div className="scene-orb scene-orb-one" />
        <div className="scene-orb scene-orb-two" />
        <div className="scene-window">
          <div className="window-top">
            <span>Experience pulse</span>
            <span>•••</span>
          </div>
          <div className="window-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="window-footer">
            <span>Build quality</span>
            <strong>{active.metric}</strong>
          </div>
        </div>
        <div className="scene-note">
          <span className="note-icon">✦</span>
          <div>
            <strong>{active.title}</strong>
            <small>{active.detail}</small>
          </div>
        </div>
        <div className="scene-cursor" aria-hidden="true">
          ↖
        </div>
      </div>
      <div
        className="scene-switcher"
        role="group"
        aria-label="Product engineering stages"
      >
        {modes.map((mode, index) => (
          <button
            key={mode.label}
            type="button"
            aria-pressed={activeMode === index}
            onClick={() => setActiveMode(index)}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
}
