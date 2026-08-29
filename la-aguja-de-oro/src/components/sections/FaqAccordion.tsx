'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/faq';
import type { FaqItem } from '@/types';

interface FaqAccordionProps {
  items?: FaqItem[];
  limit?: number;
}

export function FaqAccordion({ items = FAQ_ITEMS, limit }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-3xl mx-auto" role="list">
      {displayItems.map((item) => (
        <div key={item.id} className="faq-item" role="listitem">
          <button
            type="button"
            className="faq-button"
            id={`faq-btn-${item.id}`}
            aria-expanded={openId === item.id}
            aria-controls={`faq-answer-${item.id}`}
            onClick={() => toggle(item.id)}
          >
            <span>{item.question}</span>
            <PlusIcon className="faq-icon" aria-hidden="true" />
          </button>
          <div
            id={`faq-answer-${item.id}`}
            className={`faq-answer ${openId === item.id ? 'open' : ''}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
          >
            <div className="faq-answer-inner">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}
