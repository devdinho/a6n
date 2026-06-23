'use client';

import { useEffect, useRef, useState } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypingEffect({
  texts,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseMs = 1200,
  className,
  cursorClassName,
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping]       = useState(true);
  const [index, setIndex]         = useState(0);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = texts[index];
    if (typing) {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed,
        );
      } else {
        timeout.current = setTimeout(() => setTyping(false), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          deletingSpeed,
        );
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, typing, index, texts, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      {displayed}
      <span
        className={cursorClassName}
        style={{ display: 'inline-block', width: '1ch', animation: 'typing-cursor-blink 1s steps(1) infinite' }}
      >|</span>
    </span>
  );
}
