import { View, Text } from "react-native";
import React from "react";
import { CategoryData } from "../utils/data/CategoryData";
import Screen from "../components/Screen";
import Recommend from "../components/Recommend";

const CategoryDetailScreen = ({ route }) => {
  const { id, subId } = route.params;

  const category = CategoryData.find((c) => c.id === id);
  const subcategory = category.subcategories.find((s) => s.id === subId);
  console.log(subcategory.name);
  return (
    <Screen noSafeArea={false}>
      <Text className={"mx-3 font-semibold text-2xl mt-5 text-center mb-2"}>
        {subcategory.name}
      </Text>
      <Recommend title={"Guided Recipes"} isGuided={true} />
    </Screen>
  );
};

export default CategoryDetailScreen;
