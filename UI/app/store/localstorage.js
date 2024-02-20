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
