import { TouchableOpacity, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

export default function AppButton({
  title,
  onPress,
  color = "bg-light",
  textColor = "text-primary",
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
      <AppText
        className={`text-center font-bold text-sm uppercase ${textColor}`}
      >
        {title}
      </AppText>
      {icon ? <View className="ml-4">{icon}</View> : null}
    </TouchableOpacity>
  );
}
