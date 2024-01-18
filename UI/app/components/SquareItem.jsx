import { TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

export default function SquareItem({ name, onPress, iconName }) {
  return (
    <TouchableHighlight
      accessibilityRole="button"
      underlayColor={colors.highlight}
      onPress={onPress}
      className="mb-4 min-h-[112] w-[47%] justify-between rounded-xl bg-white p-5 pb-2"
    >
      <>
        <View className="bg-primary h-10 w-10 items-center justify-center rounded-full">
          <MaterialCommunityIcons name={iconName} size={24} color="white" />
        </View>
        <AppText className="mt-2 text-lg leading-6">{name}</AppText>
      </>
    </TouchableHighlight>
  );
}
