import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = target.getAttribute('data-delay');
          if (delay) {
            target.style.transitionDelay = `${delay}ms`;
          }
          target.classList.add('is-revealed');
          obs.unobserve(target); // Animate only once
        }
      });
    }, options);

    // Find all .reveal children inside this container, or observe the container itself if it has the class
    const element = ref.current;
    if (element.classList.contains('reveal')) {
      observer.observe(element);
    }
    
    const children = element.querySelectorAll('.reveal');
    children.forEach(child => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [options.threshold]);

  return ref;
}
