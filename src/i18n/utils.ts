// Chỉ import vi — en đã bị gỡ
import vi from './vi';

// Chỉ còn bản dịch tiếng Việt
export const translations = {
  vi
} as const;

export type TranslationKey = keyof typeof vi;

// useTranslations luôn dùng vi, tham số lang giữ để không vỡ caller
export function useTranslations(_lang: keyof typeof translations = 'vi') {
  return function t(key: TranslationKey): string {
    return vi[key] ?? '';
  };
}
