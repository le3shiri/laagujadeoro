'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animation?: 'fade-up' | 'fade-in';
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: React.ElementType;
}

export function AnimatedSection({
  children,
  className,
  style,
  animation = 'fade-up',
  delay = 0,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion at runtime too
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      el.classList.add('visible');
      return;
    }

    el.classList.add(animation);
    if (delay > 0) el.classList.add(`stagger-${delay}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay]);

  return (
    <Tag ref={ref} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
