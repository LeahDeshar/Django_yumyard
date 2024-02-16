import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { FoodData } from "../utils/data/FoodData";
import colors from "../config/colors";
const Recommend = ({ title, isYumyard = false, isGuided = false }) => {
  return (
    <View>
      <View className={"flex-row justify-between items-center mt-3 mx-5"}>
        <Text className={"text-prim font-semibold text-2xl my-5"}>{title}</Text>
        <TouchableOpacity>
          <Text className={"text-prim"}> View All</Text>
        </TouchableOpacity>
      </View>

      <View className={"mx-5"}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FoodData.map((food, index) => (
            <TouchableOpacity
              key={index}
              className={"mr-6"}
              style={{
                backgroundColor: colors.white,
                shadowColor: "#00000055",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 1.05,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius: 15,
              }}
            >
              <Image
                source={food.image}
                style={{
                  height: isGuided ? 250 : 410,
                  width: 300,
                  borderRadius: 15,
                }}
              />
              <View
                style={{
                  backgroundColor: "#00000051",
                  height: isGuided ? 250 : 410,
                  width: 300,
                  // top: 220,
                  borderRadius: 15,
                  position: "absolute",
                }}
              ></View>
              {isYumyard || isGuided ? (
                <View
                  className={
                    "absolute top-3 ml-3 bg-white flex-row px-2 rounded-2xl py-1 items-center"
                  }
                >
                  <Feather name="dollar-sign" size={16} />
                  <Text className={" text-md font-semibold"}>
                    {isYumyard ? "ORIGINAL" : "GUIDED"}
                  </Text>
                </View>
              ) : (
                ""
              )}
              <View className={"absolute bottom-3 ml-3  w-64"}>
                <Text className={"text-lightGray2 font-semibold text-lg"}>
                  @{food.username}
                </Text>
                <Text className={"text-white font-bold text-3xl"}>
                  {food.name}
                </Text>
                <View className={"flex-row justify-between items-center mt-2"}>
                  <View className={"flex-row items-center mt-2 "}>
                    <View className={"flex-row items-center mr-4"}>
                      <Ionicons name="heart" color={colors.primary} size={25} />
                      <Text className={"text-white ml-1"}>{food.likes}k</Text>
                    </View>

                    <View className={"flex-row items-center"}>
                      <Ionicons name="star" color={colors.yellow} size={25} />
                      <Text className={"text-white ml-1"}>{food.rating}</Text>
                    </View>
                  </View>
                  <View>
                    <Ionicons
                      name="heart-circle-outline"
                      size={40}
                      color={colors.white}
                    />
                    {/* <Ionicons
                      name="heart-circle-sharp"
                      size={40}
                      color={colors.white}
                    /> */}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({});
