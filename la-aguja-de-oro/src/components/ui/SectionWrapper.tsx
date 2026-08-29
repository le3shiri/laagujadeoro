import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'ivory' | 'gold-tint' | 'dark';
  id?: string;
  as?: React.ElementType;
  size?: 'default' | 'sm';
}

export function SectionWrapper({
  children,
  className,
  background = 'white',
  id,
  as: Tag = 'section',
  size = 'default',
}: SectionWrapperProps) {
  const bgMap = {
    white: 'bg-[var(--color-surface)]',
    ivory: 'bg-[var(--color-surface-2)]',
    'gold-tint': 'bg-[var(--color-gold-bg)]',
    dark: 'bg-[var(--color-dark)] text-white',
  };

  return (
    <Tag
      id={id}
      className={cn(
        bgMap[background],
        size === 'default' ? 'section' : 'section-sm',
        className
      )}
    >
      <div className="container">
        {children}
      </div>
    </Tag>
  );
}
