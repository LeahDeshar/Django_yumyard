import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { CategoryData } from "../utils/data/CategoryData";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = ({ route }) => {
  console.log(route.params.id);
  const navigation = useNavigation();

  const category = CategoryData.find((c) => c.id === route.params.id);

  return (
    <Screen noSafeArea={false}>
      <ScrollView>
        <Text className={"mx-3 font-semibold text-2xl mt-5 text-center mb-2"}>
          {category.name}
        </Text>
        <View className={"mx-3 mt-1 ml-5"}>
          {category?.subcategories?.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("CategoryDetail", {
                  id: route.params.id,
                  subId: category.id,
                })
              }
              className={`mr-6 bg-white pl-5 flex-row items-center justify-between rounded-xl my-2`}
              style={{
                shadowColor: "#7a7a7a39",
                shadowOffset: {
                  width: 2,
                  height: 1,
                },
                shadowOpacity: 1,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <Text className={"font-semibold"}>{category.name}</Text>
              <Image source={category.image} className={"w-16 h-16"} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default CategoryScreen;
