import { Image, View } from "react-native";
import AppText from "./AppText";

export default function NoPlacesFound() {
  return (
    <View className="flex-1 px-10 items-center justify-center">
      <Image
        source={require("../assets/no-places-found.png")}
        className="my-10 h-50 w-full"
        resizeMode="contain"
      />
      <AppText className="text-lg font-bold">No places found</AppText>
      <AppText className="text-mediumGray text-center">
        Sorry, the keyword you entered cannot be found, please check again or
        search with another keyword
      </AppText>
    </View>
  );
}
