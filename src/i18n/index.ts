// Ngôn ngữ duy nhất được hỗ trợ: Tiếng Việt
export const languages = {
  vi: 'Tiếng Việt'
};

export const defaultLang = 'vi';

// Chỉ còn 1 ngôn ngữ — kiểu Language luôn là 'vi'
export type Language = keyof typeof languages;

// getLangFromUrl luôn trả 'vi' vì không còn prefix locale
export function getLangFromUrl(_url: URL): Language {
  return 'vi';
}

// useTranslatedPath là no-op: trả nguyên path vì không còn prefix /vi/
export function useTranslatedPath(_lang: Language) {
  return function translatePath(path: string, _l: Language = 'vi'): string {
    return path;
  };
}
