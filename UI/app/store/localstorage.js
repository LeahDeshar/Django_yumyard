import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchDataFromStorage = async () => {
  try {
    const storedRecipeList = await AsyncStorage.getItem("recipe");
    const storedRecipe = JSON.parse(storedRecipeList);
    console.log("Recipe from AsyncStorage:", storedRecipe);
  } catch (error) {
    console.error("Error reading data from AsyncStorage:", error);
  }
};
export const fetchRecipesFromStorage = async () => {
  try {
    const storedRecipesJSON = await AsyncStorage.getItem("recipe");
    return storedRecipesJSON ? JSON.parse(storedRecipesJSON) : [];
  } catch (error) {
    console.error("Error reading data from AsyncStorage:", error);
    return [];
  }
};
