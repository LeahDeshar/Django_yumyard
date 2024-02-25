import React, { useRef } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AppVideo from "../components/AppVideo";
import Screen from "../components/Screen";
import { FoodData } from "../utils/data/FoodData";
import { ListItemSeparator } from "../components/lists";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Entypo } from "@expo/vector-icons";
import { Tags } from "../utils/data/Tags";
import Recommend from "../components/Recommend";
import Card2 from "../components/Card2";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
const RecipeScreen = ({ route }) => {
  const { id } = route.params;
  console.log(id);

  // take this io the find the recipe with the id from foodData
  const recipe = FoodData.find((food) => food.id === id);
  const CommentImages = recipe.comments?.filter((i) => i.commentImage);
  console.log(recipe);
  const BottomRef = useRef(null);
  const handlePresentModalPress = () => {
    BottomRef.current.present();
  };
  const handleCloseModalPress = () => {
    BottomRef.current.close();
  };
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
        <TouchableOpacity
          className={"flex-row justify-between items-center"}
          onPress={handlePresentModalPress}
        >
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
          <View key={index} className={"my-3"}>
            <Text className={"text-lg font-semibold mb-2"}>
              Step {index + 1}
            </Text>
            <Image
              source={{
                uri: step?.image,
              }}
              style={{
                width: "100%",
                height: 350,
                borderRadius: 10,
              }}
            />
            <View className={"my-3"}>
              <Text className={"font-semibold text-lg"}>{step?.title}</Text>
              <Text>{step?.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View className={"mx-5 my-3 pb-6"}>
        <TouchableOpacity
          className={
            "flex-row items-center border-2 rounded-full border-prim justify-center py-1"
          }
        >
          <Ionicons name={"camera-outline"} size={30} color={colors.primary} />
          <Text className={"pl-2 text-prim font-semibold"}>
            Snap,Click,Share
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Card2 title={"More Delicious Ideas For You"} />
      </View>
      <ListItemSeparator />

      <View className={"mx-5 my-3 pt-3 pb-5"}>
        <Text className={"text-lg font-semibold mb-2"}>Tags</Text>
        <View className={"  flex-row flex-wrap"}>
          {Tags.map((tag, index) => (
            <TouchableOpacity key={index}>
              <Text className={" text-prim py-2 px-2"}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <BottomSheetModal ref={BottomRef} index={0} snapPoints={[650, 850]}>
        <View className={"mx-5 my-3 pb-5"}>
          <View className={"flex-row"}>
            <View className={" flex-row items-center"}>
              <TouchableOpacity>
                <Ionicons name="camera-outline" color={colors.grey} size={30} />
              </TouchableOpacity>
              <TextInput
                placeholder="Add a comment..."
                multiline
                className={"w-80 py-3 rounded-full mx-1 pl-5"}
                style={{
                  borderWidth: 1,
                  borderColor: colors.grey,
                }}
              />
              <TouchableOpacity>
                <Ionicons name="send-sharp" color={colors.grey} size={23} />
              </TouchableOpacity>
            </View>
          </View>

          <View className={"my-3 flex-row"}>
            {CommentImages?.map((comment, index) => (
              <View key={index}>
                <Image
                  source={{
                    uri: comment?.commentImage,
                  }}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 10,
                  }}
                  className={"mx-1"}
                />
                {index === 3 && (
                  <View
                    style={{
                      width: 90,
                      height: 90,
                      position: "absolute",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      marginLeft: 4,
                    }}
                  >
                    <Text style={{ color: "#fff" }}>
                      +{CommentImages.length - 4} more
                    </Text>
                  </View>
                )}
              </View>
            )).slice(0, 4)}
          </View>

          <View>
            <ScrollView>
              {recipe?.comments?.map((comment, index) => (
                <View key={index} className={"my-3"}>
                  <View className={""}>
                    <View className={"ml-3"}>
                      <View className={"flex-row items-center"}>
                        <Image
                          source={{
                            uri: comment?.user?.image,
                          }}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                          }}
                        />
                        <View>
                          <Text
                            className={"font-semibold ml-2 italic  text-base"}
                          >
                            @{comment?.user.userName}
                          </Text>
                          <Text className={"text-grey ml-2 text-xs"}>
                            {dayjs(comment?.time).format("YYYY-MM-DD")}
                          </Text>
                        </View>
                      </View>
                      <View className={"mx-4 mt-3"}>
                        <Text className={"text-justify mb-4"}>
                          {comment?.commentText}
                        </Text>
                        <Image
                          source={{
                            uri: comment?.commentImage,
                          }}
                          style={{
                            width: "100%",
                            height: 400,
                            borderRadius: 10,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View className={"flex-row items-center"}>
                    <RatingStar value={comment?.rating} maxValue={5} />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </BottomSheetModal>
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
