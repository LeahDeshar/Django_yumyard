import { ReactNode } from "react";
import { View, TouchableHighlight, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors";

export default function ListItem({
  IconComponent,
  image,
  onPress,
  renderRightActions,
  showChevrons = false,
  subtitle,
  title,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View className="flex-row items-center bg-white p-4">
          {IconComponent}
          {image ? (
            <Image source={image} className="h-12 w-12 rounded-full" />
          ) : null}
          <View className="ml-4 flex-1 justify-center">
            <AppText numberOfLines={1}>{title}</AppText>
            {subtitle ? (
              <AppText numberOfLines={2} className="text-mediumGray">
                {subtitle}
              </AppText>
            ) : null}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              color={colors.mediumGray}
              name="chevron-right"
              size={25}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
