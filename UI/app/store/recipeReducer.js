// productReducer.js
import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createReducer } from "@reduxjs/toolkit";
import { fetchDataFromStorage, fetchRecipesFromStorage } from "./localstorage";

// const loadCartFromStorage = async () => {
//   try {
//     const cartData = await AsyncStorage.getItem("cart");
//     const theme = await AsyncStorage.getItem("theme");

//     console.log(JSON.parse(cartData), theme);
//     return cartData ? JSON.parse(cartData) : [];
//   } catch (error) {
//     console.error("Error loading cart from AsyncStorage:", error);
//     return [];
//   }
// };

const saveBookMarkToStorage = async (bookmark) => {
  try {
    await AsyncStorage.setItem("bookmark", JSON.stringify(bookmark));
  } catch (error) {
    console.error("Error saving bookmark to AsyncStorage:", error);
  }
};

const saveThemeToStorage = async (theme) => {
  try {
    await AsyncStorage.setItem("theme", theme);
  } catch (error) {
    console.error("Error saving theme to AsyncStorage:", error);
  }
};

const saveRecipeToStorage = async (recipe) => {
  try {
    // await AsyncStorage.setItem("recipe", JSON.stringify(recipe));

    const existingList = await AsyncStorage.getItem("recipe");

    let recipes = [];

    if (existingList !== null) {
      recipes = JSON.parse(existingList);
    }
    recipes.push(...recipe);
    await AsyncStorage.setItem("recipe", JSON.stringify(recipes));
  } catch (error) {
    console.error("Error saving recipe to AsyncStorage:", error);
  }
};
const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    newrecipe: [],
    bookmark: [],
    total: [],
    theme: "dark",
  },
  reducers: {
    loadRecipe: (state, action) => {
      state.recipe = action.payload;
    },
    addNewRecipeToList: (state, action) => {
      const recipes = action.payload;

      // const updatedRecipeList = [...state.recipe, recipes];
      // console.log("updatedRecipeList", updatedRecipeList);
      // state.recipe = updatedRecipeList;

      state.newrecipe.push(recipes);
      console.log(state.newrecipe, "recipes list");
      saveRecipeToStorage(state.newrecipe);
      fetchRecipesFromStorage();
    },
    addRecipeToBookmark: (state, action) => {
      const { recipe } = action.payload;

      state.bookmark.push({
        ...recipe,
      });

      saveBookMarkToStorage(state.bookmark);
      loadCartFromStorage();
    },
    // removeProductFromCart: (state, action) => {
    //   console.log("payload", action.payload.product._id);
    //   const { _id } = action.payload.product;
    //   state.cart = state.cart.filter((product) => product._id !== _id);
    //   saveCartToStorage(state.cart);
    //   loadCartFromStorage();
    // },
    toggleBookmark: (state, action) => {
      const { _id } = action.payload.recipe;
      const recipeIndex = state.recipe.findIndex(
        (recipe) => recipe._id === _id
      );
      if (recipeIndex !== -1) {
        state.recipe[recipeIndex].isBookmarked =
          !state.recipe[recipeIndex].isBookmarked;
      }
    },

    setTheme: (state, action) => {
      state.theme = action.payload;
      saveThemeToStorage(state.theme);
      saveBookMarkToStorage();
    },
  },
});

export const { addNewRecipeToList, loadRecipe, setTheme } = recipeSlice.actions;
export default recipeSlice.reducer;

// export const allRecipeReducer = createReducer(
//   {
//     recipes: [],
//     error: null,
//     createrecipe: null,
//   },
//   (builder) => {
//     //  Get All Product Data
//     builder.addCase("getAllProductRequest", (state, action) => {
//       console.log("load AllProduct");
//       state.loading = true;
//     });
//     builder.addCase("getAllProductSuccess", (state, action) => {
//       state.loading = false;
//       // state.isAuth = true;
//       state.allproduct = action.payload;
//     });
//     builder.addCase("getAllProductFail", (state, action) => {
//       console.log("picked AllProduct");
//       state.error = action.payload;
//     });

//     //  Get Top 6 Product Data
//     builder.addCase("getTopProductRequest", (state, action) => {
//       console.log("load Top Product");
//       state.loading = true;
//     });
//     builder.addCase("getTopProductSuccess", (state, action) => {
//       state.loading = false;
//       // state.isAuth = true;
//       state.topproduct = action.payload;
//     });
//     builder.addCase("getTopProductFail", (state, action) => {
//       console.log("picked AllProduct");
//       // state.isAuth = false;
//       state.error = action.payload;
//     });

//     //  Get One Product Data
//     builder.addCase("getOneProductRequest", (state, action) => {
//       console.log("load one Product");
//       state.loading = true;
//     });
//     builder.addCase("getOneProductSuccess", (state, action) => {
//       state.loading = false;
//       // state.isAuth = true;
//       state.oneproduct = action.payload;
//     });
//     builder.addCase("getOneProductFail", (state, action) => {
//       console.log("picked One Product");
//       // state.isAuth = false;
//       state.error = action.payload;
//     });

//     //  Get my Product Data
//     builder.addCase("getmyProductRequest", (state, action) => {
//       console.log("load my Product");
//       state.loading = true;
//     });
//     builder.addCase("getmyProductSuccess", (state, action) => {
//       state.loading = false;
//       // state.isAuth = true;
//       state.myproduct = action.payload;
//     });
//     builder.addCase("getmyProductFail", (state, action) => {
//       console.log("picked my Product");
//       // state.isAuth = false;
//       state.error = action.payload;
//     });
//     // create the products
//     builder.addCase("createProductRequest", (state, action) => {
//       console.log("load AllProduct");
//       state.loading = true;
//     });
//     builder.addCase("createProductSuccess", (state, action) => {
//       state.loading = false;
//       state.createproduct = action.payload;
//     });
//     builder.addCase("createProductFail", (state, action) => {
//       console.log("picked AllProduct");
//       state.error = action.payload;
//     });

//     // create the products
//     builder.addCase("deleteProductRequest", (state, action) => {
//       console.log("load delete");
//       state.loading = true;
//     });
//     builder.addCase("deleteProductSuccess", (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     });
//     builder.addCase("deleteProductFail", (state, action) => {
//       console.log("picked delete");
//       state.error = action.payload;
//     });

//     // add the image of the products
//     builder.addCase("addImageProductRequest", (state, action) => {
//       console.log("load AllProduct");
//       state.loading = true;
//     });
//     builder.addCase("addImageProductSuccess", (state, action) => {
//       state.loading = false;
//       state.createproduct = action.payload;
//     });
//     builder.addCase("addImageProductFail", (state, action) => {
//       console.log("picked AllProduct");
//       state.error = action.payload;
//     });

//     builder.addCase("updateProductRequest", (state, action) => {
//       console.log("load AllProduct");
//       state.loading = true;
//     });
//     builder.addCase("updateProductSuccess", (state, action) => {
//       state.loading = false;
//       state.createproduct = action.payload;
//     });
//     builder.addCase("updateProductFail", (state, action) => {
//       console.log("picked update");
//       state.error = action.payload;
//     });
//   }
// );
