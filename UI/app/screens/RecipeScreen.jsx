import React from "react";
import { Image, Text, View } from "react-native";
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
        <Text>Reviews</Text>
        <Text>103 comments- 35 pictures</Text>
      </View>
    </Screen>
  );
};

export default RecipeScreen;
