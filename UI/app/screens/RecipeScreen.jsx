import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppVideo from "../components/AppVideo";
import Screen from "../components/Screen";
import { FoodData } from "../utils/data/FoodData";
import { ListItemSeparator } from "../components/lists";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Entypo } from "@expo/vector-icons";
const RecipeScreen = ({ route }) => {
  const { id } = route.params;
  console.log(id);

  // take this io the find the recipe with the id from foodData
  const recipe = FoodData.find((food) => food.id === id);
  console.log(recipe);

  return (
    <Screen noSafeArea={true} className={"justify-center"}>
      <AppVideo />
      <View className={"justify-center items-center mt-5 mb-3"}>
        <Text className={"text-2xl font-semibold mb-2"}>{recipe?.name}</Text>
        <View className={"my-3"}>
          <RatingStar value={3} maxValue={5} />
          <Text className={" text-sm font-semibold text-grey mt-2"}>
            Based on {recipe?.reviews.rating} ratings
          </Text>
        </View>

        <View className={"flex-row items-center my-2"}>
          <View className={"flex-row items-center"}>
            <Ionicons name="heart" size={24} color={colors.primary} />
            <Text className={"ml-1"}>{recipe?.reviews.likes}</Text>
          </View>
          <View className={"flex-row items-center ml-7"}>
            <Ionicons name="bookmark" size={24} color={colors.primary} />
            <Text className={"ml-1"}>Save</Text>
          </View>
          <View className={"flex-row items-center ml-7"}>
            <Ionicons name="share-social" size={24} color={colors.primary} />
            <Text className={"ml-1"}>Share</Text>
          </View>
        </View>
      </View>
      <ListItemSeparator />
      <View className={"my-4"}>
        <View className={"flex-row mx-5 items-center"}>
          <Image
            source={{ uri: recipe?.user.userImage }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
          />
          <View className={"ml-3"}>
            <Text className={"font-semibold italic text-lg"}>
              @{recipe?.user.username}
            </Text>
            <Text className={"text-grey my-1"}>{recipe?.user.bio}</Text>

            <Text className={"text-prim"}>{recipe?.user.instaLink}</Text>
          </View>
        </View>
        <Text className={"mx-5 mt-4"}>{recipe?.description}</Text>
      </View>
      <ListItemSeparator />
      <View className={"mx-5 my-3"}>
        <TouchableOpacity className={"flex-row justify-between items-center"}>
          <View>
            <Text className={"text-lg font-semibold mb-2"}>Reviews</Text>
            <Text>103 comments- 35 pictures</Text>
          </View>
          <Text className={"text-prim"}>Read</Text>
        </TouchableOpacity>
      </View>
      <ListItemSeparator />
      <View className={"mx-5 my-3"}>
        <Text className={"text-lg font-semibold mb-2"}>
          Difficult: {recipe?.difficulty}
        </Text>
      </View>
      <ListItemSeparator />
      <View className={"mx-5 my-3"}>
        <Text className={"text-lg font-semibold mb-2"}>Ingredients</Text>
        {recipe?.ingredients.map((ingredient, index) => (
          <View className={"flex-row items-center my-1"} key={index}>
            <Entypo name="dot-single" size={24} color={colors.primary} />
            <Text key={index}>{ingredient}</Text>
          </View>
        ))}
      </View>
      <ListItemSeparator />

      <View className={"mx-5 my-3"}>
        <Text className={"text-lg font-semibold mb-2"}>Nutrition</Text>
        <View className={"flex-row justify-between"}>
          <Text className={"font-semibold mb-3 mt-2"}>Cal</Text>
          <Text className={"font-semibold mb-3 mt-2"}>Protein</Text>
          <Text className={"font-semibold mb-3 mt-2"}>Fat</Text>
          <Text className={"font-semibold mb-3 mt-2"}>Carbs</Text>
        </View>
        <View className={"flex-row justify-between"}>
          <Text className={"text-center"}>
            {recipe?.nutritionPerServing?.calories}
          </Text>
          <Text className={"text-center"}>
            {recipe?.nutritionPerServing?.protein}g
          </Text>
          <Text className={"text-center"}>
            {recipe?.nutritionPerServing?.fat}g
          </Text>
          <Text className={"text-center"}>
            {recipe?.nutritionPerServing?.carbohydrates}g
          </Text>
        </View>
      </View>
      <ListItemSeparator />

      <View className={"mx-5 my-3"}>
        {recipe?.steps.map((step, index) => (
          <View key={index}>
            <Text className={"text-lg font-semibold mb-2"}>
              Step {index + 1}
            </Text>
            <Text>{step?.title}</Text>
            <Text>{step?.description}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
};

export default RecipeScreen;
const RatingStar = ({ value, maxValue }) => {
  const stars = [];

  for (let i = 1; i <= value; i++) {
    stars.push(
      <Ionicons key={i} name="star" size={24} color={colors.primary} />
    );
  }

  // Fill the remaining stars with gray
  for (let i = value + 1; i <= maxValue; i++) {
    stars.push(
      <Ionicons key={i} name="star-outline" size={24} color={colors.primary} />
    );
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};
