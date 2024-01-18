import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function Icon({
  backgroundColor = colors.black,
  color = colors.white,
  name,
  size = 40,
}) {
  const dynamicViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };
  return (
    <View style={[dynamicViewStyle]} className="items-center justify-center">
      <MaterialCommunityIcons color={color} name={name} size={size * 0.5} />
    </View>
  );
}
