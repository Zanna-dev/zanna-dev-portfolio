import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const location = useLocation();
  const visitedLocations = useRef(new Set());
  const initialLocationKey = useRef(location.key);
  const wasReloaded = useRef(
    typeof window !== 'undefined'
      && window.performance?.getEntriesByType('navigation')[0]?.type === 'reload',
  );

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

    // React Strict Mode runs effects twice in development. Handle each history
    // location once so the second pass cannot turn an initial load into a
    // project-restoration scroll.
    if (visitedLocations.current.has(location.key)) return undefined;
    visitedLocations.current.add(location.key);

    const frame = window.requestAnimationFrame(() => {
      const isInitialLoad = location.key === initialLocationKey.current;
      const shouldStartAtTop = isInitialLoad || wasReloaded.current;
      const projectTarget = !shouldStartAtTop && location.state?.focusProject
        ? document.getElementById(`project-${location.state.focusProject}`)
        : null;
      const hashTarget = location.hash ? document.getElementById(location.hash.slice(1)) : null;

      if (projectTarget) projectTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
      else if (hashTarget) hashTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return null;
}
