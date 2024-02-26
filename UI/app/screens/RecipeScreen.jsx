import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
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

  const [showReplies, setShowReplies] = useState(
    Array(recipe?.comments?.length).fill(false)
  );

  const toggleReplies = (index) => {
    const updatedShowReplies = [...showReplies];
    updatedShowReplies[index] = !updatedShowReplies[index];
    setShowReplies(updatedShowReplies);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleStartTimer = (totalSeconds) => {
    // Start timer logic here using totalSeconds
    console.log("Timer started with", totalSeconds, "seconds");
    setModalVisible(false);
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
            <Button title="Set Timer" onPress={() => setModalVisible(true)} />
            <TimerModal
              isVisible={modalVisible}
              onClose={() => setModalVisible(false)}
              onStart={handleStartTimer}
            />
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

          <View className={"mb-5"}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              className={" mb-72 "}
            >
              {recipe?.comments?.map((comment, index) => (
                <View key={index} className={"my-3"}>
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
                    <View className={"flex-row  mx-4 mt-3"}>
                      <TouchableOpacity
                        className={"flex-row items-center mr-6"}
                      >
                        <Ionicons
                          name="heart"
                          size={24}
                          color={colors.primary}
                        />
                        <Text className={"ml-2"}>{comment?.likes}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className={"flex-row items-center"}
                        onPress={() => toggleReplies(index)}
                      >
                        <Ionicons
                          name="chatbubble-ellipses"
                          size={24}
                          color={colors.primary}
                        />
                        <Text className={"ml-2"}>
                          {comment?.replies.length}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      {showReplies[index] && (
                        <View className={"mx-4 mt-3"}>
                          <View className={"flex-row w-full "}>
                            <View className={" flex-row items-center"}>
                              <TouchableOpacity>
                                <Ionicons
                                  name="camera-outline"
                                  color={colors.grey}
                                  size={30}
                                />
                              </TouchableOpacity>
                              <TextInput
                                placeholder="Add a comment..."
                                multiline
                                className={"py-3 w-64 rounded-full mx-1 pl-5"}
                                style={{
                                  borderWidth: 1,
                                  borderColor: colors.grey,
                                }}
                              />
                              <TouchableOpacity>
                                <Ionicons
                                  name="send-sharp"
                                  color={colors.grey}
                                  size={23}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                          {comment?.replies.map((reply, replyIndex) => (
                            <View key={replyIndex} className={"ml-6 my-3"}>
                              <View className={"flex-row items-center"}>
                                <Image
                                  source={{
                                    uri: reply?.user?.image,
                                  }}
                                  style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 50,
                                  }}
                                />
                                <View>
                                  <Text
                                    className={
                                      "font-semibold ml-2 italic  text-base"
                                    }
                                  >
                                    @{reply?.user.userName}
                                  </Text>
                                  <Text className={"text-grey ml-2 text-xs"}>
                                    {dayjs(reply?.time).format("YYYY-MM-DD")}
                                  </Text>
                                </View>
                              </View>
                              <Text className={" ml-12"}>{reply.repText}</Text>
                            </View>
                          ))}
                        </View>
                      )}
                    </View>
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
const TimerModal = ({ isVisible, onClose, onStart }) => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const handleStart = () => {
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    onStart(totalSeconds);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
      className={"flex-row"}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentOuter}>
          <View style={styles.modalContent}>
            <View>
              <Text style={styles.label}>HOUR</Text>
              <Picker
                style={styles.picker}
                // selectionColor={"#000"}
                itemStyle={{ color: colors.primary }}
                selectedValue={hours}
                onValueChange={(itemValue) => setHours(itemValue)}
              >
                {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                  <Picker.Item
                    key={hour}
                    label={hour < 10 ? `0${hour}` : `${hour}`}
                    value={hour < 10 ? `0${hour}` : `${hour}`}
                  />
                ))}
              </Picker>
            </View>
            <View>
              <Text style={styles.label}>MINUTES</Text>
              <Picker
                style={styles.picker}
                selectedValue={minutes}
                onValueChange={(itemValue) => setMinutes(itemValue)}
              >
                {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                  <Picker.Item
                    key={minute}
                    label={minute < 10 ? `0${minute}` : `${minute}`}
                    value={minute < 10 ? `0${minute}` : `${minute}`}
                  />
                ))}
              </Picker>
            </View>
            <View>
              <Text style={styles.label}>SECONDS</Text>
              <Picker
                style={styles.picker}
                selectedValue={seconds}
                onValueChange={(itemValue) => setSeconds(itemValue)}
              >
                {Array.from({ length: 60 }, (_, i) => i).map((second) => (
                  <Picker.Item
                    key={second}
                    label={second < 10 ? `0${second}` : `${second}`}
                    value={second < 10 ? `0${second}` : `${second}`}
                  />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Start" onPress={handleStart} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
  },
  modalContentOuter: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
    color: colors.grey,
  },
  picker: {
    width: 100,
    height: 180,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
