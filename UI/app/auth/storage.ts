import * as SecureStore from "expo-secure-store";

export const langToIndex = {
  en: 0,
  np: 1,
} as const;

const setLanguage = async (language: keyof typeof langToIndex) => {
  try {
    await SecureStore.setItemAsync("language", language);
  } catch (error) {
    throw new Error("Error storing the language");
  }
};

const getLanguage = async (): Promise<keyof typeof langToIndex> => {
  try {
    const language = await SecureStore.getItemAsync("language");
    return (
      (language as keyof typeof langToIndex) ||
      ("en" as keyof typeof langToIndex)
    );
  } catch (error) {
    throw new Error("Error getting the language");
  }
};

export default {
  getLanguage,
  setLanguage,
};
