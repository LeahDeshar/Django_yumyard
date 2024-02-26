import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { CategoryData } from "../utils/data/CategoryData";
const Categories = ({ horizontal = true, isExplore = false }) => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={horizontal} showsHorizontalScrollIndicator={false}>
      {isExplore && (
        <Text
          className={"text-prim font-semibold text-2xl mt-5 pt-5 mb-1 ml-6"}
        >
          Explore More
        </Text>
      )}
      <View
        style={horizontal ? styles.container : styles.container1}
        className={`${horizontal ? "ml-3 mt-3" : "mx-3 mt-1 ml-5"} `}
      >
        {CategoryData?.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("CategoryScreen", { id: category.id })
            }
            className={`mr-6 bg-white pl-5 flex-row items-center justify-between rounded-xl ${
              !horizontal && "my-2 py-1"
            }`}
            style={{
              shadowColor: "#7a7a7a39",
              shadowOffset: {
                width: !horizontal ? 0 : 3,
                height: 1,
              },
              shadowOpacity: 1.05,
              shadowRadius: !horizontal ? 2 : 5,
              elevation: 5,
            }}
          >
            <Text className={"font-semibold"}>{category.name}</Text>
            <Image source={category.image} className={"w-16 h-16"} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  container1: {
    flexDirection: "column",
  },
});
