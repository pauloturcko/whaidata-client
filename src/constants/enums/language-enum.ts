export enum Language {
  Portugues = 0,
  Ingles = 1,
  Espanhol = 2,
}

export const LanguageLabels: Record<Language, string> = {
  [Language.Portugues]: "Português",
  [Language.Ingles]: "English",
  [Language.Espanhol]: "Español",
};
