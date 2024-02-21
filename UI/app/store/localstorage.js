import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadRecipe } from "./recipeReducer";

export const fetchDataFromStorage = async (dispatch) => {
  try {
    const storedRecipeList = await AsyncStorage.getItem("recipe");
    const storedRecipe = JSON.parse(storedRecipeList);
    dispatch(loadRecipe(storedRecipe || []));
    console.log("Recipe from AsyncStorage:", storedRecipe);
  } catch (error) {
    console.error("Error reading data from AsyncStorage:", error);
  }
};
