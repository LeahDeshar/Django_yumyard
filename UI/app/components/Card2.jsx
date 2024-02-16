import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import React from "react";

import colors from "../config/colors";
import { Food1Data } from "../utils/data/Food1Data";
const Card2 = ({ title, isPro = false, isTip = false }) => {
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
          {Food1Data.map((food, index) => (
            <TouchableOpacity
              key={index}
              className={"mr-6"}
              style={{
                backgroundColor: colors.white,
                shadowColor: "#00000025",
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
                  height: 130,
                  width: 200,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              />

              <View className={" ml-3 w-44 "}>
                {!isTip && (
                  <View
                    className={"flex-row justify-between items-center mt-1"}
                  >
                    <View className={"flex-row items-center mt-2 "}>
                      <View className={"flex-row items-center mr-4"}>
                        <Ionicons
                          name="heart"
                          color={colors.primary}
                          size={15}
                        />
                        <Text className={" ml-1"}>{food.likes}k</Text>
                      </View>

                      <View className={"flex-row items-center"}>
                        <Ionicons name="star" color={colors.yellow} size={15} />
                        <Text className={" ml-1"}>{food.rating}</Text>
                      </View>
                    </View>
                    <View>
                      <Ionicons name="heart-circle-outline" size={30} />
                      {/* <Ionicons
                        name="heart-circle-sharp"
                        size={40}
                        color={colors.white}
                      /> */}
                    </View>
                  </View>
                )}
                <Text className={" font-bold text-lg mb-1"}>{food.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({});
