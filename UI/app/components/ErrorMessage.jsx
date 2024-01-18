import { View } from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";

export default function ErrorMessage({ onPress }) {
  return (
    <View className="p-5">
      <AppText>Couldn&apos;t retrieve the posts.</AppText>
      <AppButton title="Retry" onPress={onPress} />
    </View>
  );
}
