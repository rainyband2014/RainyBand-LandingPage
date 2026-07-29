// Triggers animation when elements enter the viewport
export function initScrollReveal() {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const revealElements = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        // Optional delay for staggered animations
        const delay = target.getAttribute('data-delay');
        if (delay) {
          target.style.transitionDelay = `${delay}ms`;
        }
        
        target.classList.add('is-revealed');
        // Unobserve after revealing to animate only once
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}
