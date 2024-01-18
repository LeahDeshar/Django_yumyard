import { View, Text } from "react-native";

import Screen from "../components/Screen";

export default function NotificationsScreen() {
  return (
    <Screen backgroundColor="white" noSafeArea className="p-5 flex-1">
      <View className="flex-1 justify-center">
        <Text className="text-center">No notifications</Text>
      </View>
    </Screen>
  );
}
