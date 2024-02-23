import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppVideo from "../components/AppVideo";
import Screen from "../components/Screen";
import { FoodData } from "../utils/data/FoodData";
import { ListItemSeparator } from "../components/lists";
const RecipeScreen = ({ route }) => {
  const { id } = route.params;
  console.log(id);

  // take this io the find the recipe with the id from foodData
  const recipe = FoodData.find((food) => food.id === id);
  console.log(recipe);

  return (
    <Screen noSafeArea={true} className={"justify-center"}>
      <AppVideo />
      <View>
        <Text>{recipe?.name}</Text>
        <Text>Based on {recipe?.reviews.rating} ratings</Text>
        <Text>{recipe?.reviews.likes}</Text>
      </View>
      <ListItemSeparator />
      <View>
        <View className={"flex-row"}>
          <Image
            source={{ uri: recipe?.user.userImage }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
          />
          <View>
            <Text>{recipe?.user.username}</Text>
            <Text>{recipe?.user.bio}</Text>

            <Text>{recipe?.user.instaLink}</Text>
          </View>
          {/* {recipe?.user} */}
        </View>
        <Text>{recipe?.description}</Text>
      </View>
      <ListItemSeparator />
      <View>
        <TouchableOpacity className={"flex-row justify-between items-center"}>
          <View>
            <Text>Reviews</Text>
            <Text>103 comments- 35 pictures</Text>
          </View>
          <Text>Read</Text>
        </TouchableOpacity>
      </View>
      <ListItemSeparator />
      <View>
        <Text>Difficult: {recipe?.difficulty}</Text>
      </View>
      <ListItemSeparator />
      <View>
        <Text>Ingredients</Text>
        {recipe?.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
      </View>
      <View>
        <Text>Nutrition</Text>
        <View className={"flex-row"}>
          <Text>Cal</Text>
          <Text>Protein</Text>
          <Text>Fat</Text>
          <Text>Carbs</Text>
        </View>
        <View className={"flex-row"}>
          <Text>{recipe?.nutritionPerServing?.calories}</Text>
          <Text>{recipe?.nutritionPerServing?.protein}</Text>
          <Text>{recipe?.nutritionPerServing?.fat}</Text>
          <Text>{recipe?.nutritionPerServing?.carbs}</Text>
        </View>
      </View>
      <View>
        {recipe?.steps.map((step, index) => (
          <View key={index}>
            <Text>Step {index + 1}</Text>
            <Text>{step?.title}</Text>
            <Text>{step?.description}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
};

export default RecipeScreen;
