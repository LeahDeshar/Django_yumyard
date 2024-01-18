import { Pressable, View } from "react-native";
import CheckBox from "expo-checkbox";
import AppText from "./AppText";
import colors from "../config/colors";

export default function AppCheckBox({
  my0,
  label,
  value,
  onValueChange,
  ...otherProps
}) {
  return (
    <View
      // pointerEvents="none"
      className={`flex-row items-center ${
        my0 ? "my-0" : "my-0"
      } border-primary border-2 rounded-lg py-2 px-2 my-2`}
    >
      <CheckBox
        className="m-2 ml-3 my-3"
        style={{ height: 23, width: 23 }}
        color={colors.primary}
        value={value}
        onValueChange={onValueChange}
        {...otherProps}
      />
      <AppText className="text-base ml-2">{label}</AppText>
    </View>
  );
}
