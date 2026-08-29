import { BUSINESS } from '@/lib/business';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getWhatsAppUrl(message?: string): string {
  const text = message ?? BUSINESS.whatsapp.defaultMessage;
  return `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function getCanonicalUrl(path: string): string {
  const base = BUSINESS.seo.siteUrl.replace(/\/$/, '');
  const slug = path.startsWith('/') ? path : `/${path}`;
  return `${base}${slug}`;
}
