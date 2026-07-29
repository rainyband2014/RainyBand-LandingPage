import React, { useEffect, useRef, useState, useCallback } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  navItems: NavItem[];
  currentPath: string;
}

const TRANSITION_MS = 320;

export default function MobileMenu({ navItems, currentPath }: Props) {
  // Logical "should be visible" state — drives the enter/exit CSS classes
  const [isOpen, setIsOpen] = useState(false);
  // DOM presence — kept true slightly longer than isOpen so the exit
  // animation can actually play before we unmount the overlay
  const [shouldRender, setShouldRender] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }, []);

  const duration = prefersReducedMotion.current ? 0 : TRANSITION_MS;

  const open = useCallback(() => {
    setShouldRender(true);
    document.body.style.overflow = 'hidden';
    // Mount first with "closed" styles, then flip to "open" on the next
    // frame so the browser actually has a starting point to transition from.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsOpen(true));
    });
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
    triggerRef.current?.focus();
  }, []);

  // Unmount only after the exit transition has had time to finish
  useEffect(() => {
    if (!isOpen && shouldRender) {
      const t = setTimeout(() => setShouldRender(false), duration);
      return () => clearTimeout(t);
    }
  }, [isOpen, shouldRender, duration]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  // Focus first menu item once it has (mostly) finished animating in
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => {
      const firstLink = menuRef.current?.querySelector('a');
      firstLink?.focus();
    }, duration);
    return () => clearTimeout(t);
  }, [isOpen, duration]);

  // Safety cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldRender && !isOpen) {
    // Still render the trigger button below; overlay itself unmounts fully
  }

  return (
    <>
      {/* Hamburger / Close Button */}
      <button
        ref={triggerRef}
        className="md:hidden relative z-[60] flex h-10 w-10 items-center justify-center rounded-full text-neutral-text transition-colors hover:text-brand-600 active:scale-95"
        aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
        aria-expanded={isOpen}
        onClick={() => (isOpen ? close() : open())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          stroke="currentColor"
          className="h-6 w-6"
        >
          {/* Top bar */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className="origin-center transition-transform duration-300 ease-out"
            style={{
              transform: isOpen
                ? 'translateY(5.25px) rotate(45deg)'
                : 'translateY(0) rotate(0deg)',
            }}
            d="M3.75 6.75h16.5"
          />
          {/* Middle bar */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className="origin-center transition-opacity duration-200 ease-out"
            style={{ opacity: isOpen ? 0 : 1 }}
            d="M3.75 12h16.5"
          />
          {/* Bottom bar */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className="origin-center transition-transform duration-300 ease-out"
            style={{
              transform: isOpen
                ? 'translateY(-5.25px) rotate(-45deg)'
                : 'translateY(0) rotate(0deg)',
            }}
            d="M3.75 17.25h16.5"
          />
        </svg>
      </button>

      {/* Overlay */}
      {shouldRender && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Menu điều hướng"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-950/97 backdrop-blur-md transition-opacity ease-out"
            style={{
              opacity: isOpen ? 1 : 0,
              transitionDuration: `${duration}ms`,
            }}
            onClick={close}
          />

          {/* Ambient glow accent, purely decorative */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-opacity ease-out"
            style={{
              opacity: isOpen ? 1 : 0,
              transitionDuration: `${duration}ms`,
              background:
                'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(94, 184, 179, 0.12), transparent 60%)',
            }}
          />

          {/* Menu Content */}
          <div
            ref={menuRef}
            className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-[env(safe-area-inset-bottom)] ease-out"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen
                ? 'translateY(0) scale(1)'
                : 'translateY(-12px) scale(0.98)',
              transitionProperty: 'opacity, transform',
              transitionDuration: `${duration}ms`,
            }}
          >
            <nav className="flex w-full max-w-xs flex-col items-stretch gap-1.5">
              {navItems.map((item, index) => {
                const isActive =
                  item.href !== '#' && currentPath.startsWith(item.href);
                const itemDelay = prefersReducedMotion.current
                  ? 0
                  : 90 + index * 45;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={`group flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-lg font-medium ease-out ${isActive
                        ? 'bg-brand-600/15 text-brand-200'
                        : 'text-neutral-bg/85 hover:bg-white/5 hover:text-white active:scale-[0.98]'
                      }`}
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen
                        ? 'translateY(0)'
                        : 'translateY(10px)',
                      transitionProperty: 'opacity, transform, background-color, color',
                      transitionDuration: `${duration}ms`,
                      transitionDelay: isOpen ? `${itemDelay}ms` : '0ms',
                    }}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      aria-hidden="true"
                    />
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div
              className="mt-8 ease-out"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: `${duration}ms`,
                transitionDelay: isOpen
                  ? `${prefersReducedMotion.current ? 0 : 90 + navItems.length * 45}ms`
                  : '0ms',
              }}
            >
              <a
                href="/#booking"
                onClick={close}
                className="inline-flex items-center justify-center rounded-full bg-brand-300 px-8 py-3.5 text-base font-bold text-brand-950 shadow-[0_8px_30px_rgba(94,184,179,0.35)] transition-all duration-300 hover:bg-brand-100 active:scale-[0.98]"
              >
                Đặt lịch ngay
              </a>
            </div>

            {/* Brand watermark */}
            <p
              className="absolute bottom-8 font-display text-sm tracking-wider text-white/20 ease-out"
              style={{
                opacity: isOpen ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: `${duration}ms`,
                transitionDelay: isOpen
                  ? `${prefersReducedMotion.current ? 0 : 90 + (navItems.length + 1) * 45}ms`
                  : '0ms',
              }}
            >
              RAINY BAND
            </p>
          </div>
        </div>
      )}
    </>
  );
}