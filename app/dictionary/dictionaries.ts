import 'server-only';

const dictionaries = {
  en: async () => await import('./en.json').then((module) => module.default),
  tp: async () => await import('./tp.json').then((module) => module.default),
  sp: async () => await import('./sp.json').then((module) => module.default),
  _: async () => await import('./en.json').then((module) => module.default)
};

export const getDictionary = async (lang: string) =>
  (dictionaries[lang as keyof typeof dictionaries] ?? dictionaries._)();

