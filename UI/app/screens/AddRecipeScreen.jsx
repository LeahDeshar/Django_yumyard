import { View, Text, Image, RefreshControl } from "react-native";
import React, { useRef } from "react";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const AddRecipeScreen = () => {
  const BottomRef = useRef(null);

  const handlePresentModalPress = () => {
    BottomRef.current.present();
  };
  const handleCloseModalPress = () => {
    BottomRef.current.close();
  };
  return (
    <Screen
      noSafeArea={true}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => {}} />
      }
    >
      <View className={"bg-white rounded-b-full px-8 pt-10 pb-9"}>
        <View className={"flex-row justify-between items-center "}>
          <View className={"mt-10 pt-10"}>
            <Text className={"text-2xl font-semibold"}>Keep all your home</Text>
            <Text className={"text-2xl font-semibold pl-2"}>
              cooking in one place
            </Text>
            <Text className={"pl-6 pt-2"}>
              And share with friends and family
            </Text>
          </View>
          <View>
            <Image
              source={require("../assets/article/adv22.png")}
              style={{
                height: 150,
                width: 150,
                resizeMode: "cover",
                // left: 250,
                right: 0,
                bottom: 20,
              }}
            />
          </View>
        </View>

        <View className={"justify-center items-center pt-5"}>
          <AppButton
            title="Add Recipe"
            className={"px-6"}
            onPress={handlePresentModalPress}
          />
        </View>
      </View>

      <View className={"mx-6"}>
        <Text className={"text-prim font-semibold text-2xl my-5"}>
          My Recipe
        </Text>
        <Text className={"text-mediumGray"}>
          You haven't added any recipes yet!
        </Text>
      </View>

      <BottomSheetModal ref={BottomRef} index={0} snapPoints={[250]}>
        <Text>Hi</Text>
      </BottomSheetModal>
    </Screen>
  );
};

export default AddRecipeScreen;
