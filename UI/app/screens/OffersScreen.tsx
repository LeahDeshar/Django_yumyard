import { useEffect, useRef, useState } from "react";
import {
  Image,
  ActivityIndicator as NativeActivityIndicator,
  RefreshControl,
  TouchableHighlight,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import { ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import routes from "../navigation/routes";
import { Promo, offers } from "../utils/constants";
import colors from "../config/colors";
import { useBearStore } from "../store";

export default function OffersScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.OFFERS>;
}) {
  const setActivePromo = useBearStore((state) => state.setActivePromo);

  return (
    <>
      <Screen
        className="p-5"
        noSafeArea
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
      >
        <View>
          <View className="rounded-xl bg-white">
            {offers.map(({ code, color }, index) => (
              <TouchableHighlight
                key={code}
                accessibilityRole="button"
                underlayColor={colors.highlight}
                onPress={() => {
                  setActivePromo({ code, color });
                }}
              >
                <View>
                  {index === 0 ? null : (
                    <View className="pl-5">
                      <ListItemSeparator />
                    </View>
                  )}
                  <View className="flex-row items-center px-5 py-3">
                    <View className="h-12 w-12 rounded-full justify-center items-center">
                      <MaterialCommunityIcons
                        color={color}
                        name="shopping"
                        size={36}
                      />
                    </View>
                    <View className="ml-4 flex-1">
                      <AppText className="text-lg">Discount: 15% OFF!</AppText>
                      <View className="flex-row justify-between">
                        <AppText className="text-mediumGray text-base">
                          Special Promo valid for Black Friday
                        </AppText>
                        {/* <AppText className="text-mediumGray text-base">
                            {toTitleCase(type)}
                          </AppText> */}
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </Screen>
    </>
  );
}
