import { TouchableHighlight } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableHighlight
      className="p-4"
      underlayColor={colors.lightGray}
      onPress={onPress}
    >
      <AppText>{item.label}</AppText>
    </TouchableHighlight>
  );
}
