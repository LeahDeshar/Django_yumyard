import { Image, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

export default function AppButton({
  title,
  onPress,
  color = "bg-secondary",
  textColor = "text-black",
  underlayColor = colors.highlight,
  className,
  style,
  disabled = false,
  icon,
}) {
  return (
    <TouchableOpacity
      className={`${color} my-2 h-12 flex-row items-center justify-center rounded-xl ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      style={style}
      onPress={disabled ? undefined : onPress}
    >
      <Image
        source={require("../assets/category/1.png")}
        style={{
          width: 55,
          height: 50,
          position: "absolute",
          right: 95,
        }}
      />
      <AppText
        className={`text-center font-bold text-sm uppercase ${textColor} pl-4`}
      >
        {title}
      </AppText>
      {icon ? <View className="ml-4">{icon}</View> : null}
    </TouchableOpacity>
  );
}
