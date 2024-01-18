import { Text } from "react-native";
import AppText from "./AppText";

export function ListTitle({ name }) {
  return (
    <AppText
      className="text-mediumGray px-5 pb-2 pt-6 text-xs uppercase"
      accessibilityRole="header"
    >
      {name}
    </AppText>
  );
}
