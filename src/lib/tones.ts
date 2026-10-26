export type Tone = 'lilac' | 'mint' | 'peach' | 'sky' | 'butter' | 'rose';

// Classes completas (Tailwind não detecta nomes montados dinamicamente).
export const tones: Record<Tone, { bg: string; bgSoft: string; border: string; text: string; chip: string }> = {
  lilac:  { bg: 'bg-lilac-100',  bgSoft: 'bg-lilac-50',  border: 'border-lilac-300',  text: 'text-lilac-600',  chip: 'bg-lilac-100 text-lilac-600' },
  mint:   { bg: 'bg-mint-100',   bgSoft: 'bg-mint-50',   border: 'border-mint-300',   text: 'text-mint-600',   chip: 'bg-mint-100 text-mint-600' },
  peach:  { bg: 'bg-peach-100',  bgSoft: 'bg-peach-50',  border: 'border-peach-300',  text: 'text-peach-600',  chip: 'bg-peach-100 text-peach-600' },
  sky:    { bg: 'bg-sky-100',    bgSoft: 'bg-sky-50',    border: 'border-sky-300',    text: 'text-sky-600',    chip: 'bg-sky-100 text-sky-600' },
  butter: { bg: 'bg-butter-100', bgSoft: 'bg-butter-50', border: 'border-butter-300', text: 'text-butter-600', chip: 'bg-butter-100 text-butter-600' },
  rose:   { bg: 'bg-rose-100',   bgSoft: 'bg-rose-50',   border: 'border-rose-300',   text: 'text-rose-600',   chip: 'bg-rose-100 text-rose-600' },
};
