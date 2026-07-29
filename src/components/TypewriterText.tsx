import React, { useEffect, useRef, useState } from 'react';

interface Props {
  paragraphs: string[];
  typingSpeed?: number;
  className?: string;
  textClassName?: string;
}

export default function TypewriterText({ paragraphs, typingSpeed = 15, className = "space-y-4 mb-10", textClassName = "text-base md:text-lg text-neutral-text leading-relaxed" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState<string[]>(Array(paragraphs.length).fill(''));
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedText(paragraphs);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [paragraphs]);

  useEffect(() => {
    if (!isVisible || currentParagraphIndex >= paragraphs.length) {
      if (currentParagraphIndex >= paragraphs.length) {
        setIsTyping(false);
      }
      return;
    }

    setIsTyping(true);
    const fullText = paragraphs[currentParagraphIndex];
    let currentCharIndex = 0;

    const typeChar = () => {
      setTypedText(prev => {
        const newTyped = [...prev];
        newTyped[currentParagraphIndex] = fullText.substring(0, currentCharIndex);
        return newTyped;
      });

      if (currentCharIndex < fullText.length) {
        currentCharIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        // Finished current paragraph, move to next
        setCurrentParagraphIndex(prev => prev + 1);
      }
    };

    // Start typing the current paragraph
    const timeoutId = setTimeout(typeChar, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [isVisible, currentParagraphIndex, paragraphs, typingSpeed]);

  return (
    <div ref={containerRef} className={className}>
      {paragraphs.map((fullText, index) => {
        const isCurrentParagraph = index === currentParagraphIndex;
        const isCompleted = index < currentParagraphIndex;
        const shouldShowCursor = isTyping && isCurrentParagraph;

        // Render full text invisibly for screen readers / layout stability,
        // overlay the typed text on top.
        return (
          <div key={index} className={`relative ${textClassName}`}>
            <p className="opacity-0 pointer-events-none" aria-hidden="true">
              {fullText}
            </p>
            <p className="absolute top-0 left-0 w-full h-full">
              {typedText[index]}
              {shouldShowCursor && (
                <span className="inline-block w-2 h-5 ml-1 bg-brand-600 align-middle animate-pulse"></span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
