import { useState } from "react";
import { Image, RefreshControl, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ActivityIndicator from "../components/ActivityIndicator";
import AppImage from "../components/AppImage";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppListItems from "../components/AppListItems";
import AppButton from "../components/AppButton";
import AppSwitch from "../components/AppSwitch";
import { useBearStore } from "../store";
import ImageInput from "../components/ImageInput";

export default function AccountScreen({ route, navigation }) {
  const [artificialLoading, setArtificialLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <ActivityIndicator
        className="bg-iosBackground"
        visible={artificialLoading}
      />
      <Screen
        className="p-5 pb-10"
        noSafeArea
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
      >
        <View>
          <View className="mt-3 items-center flex-row ">
            <ImageInput
              isProfile
              onImageChange={handleImageChange}
              imageAsset={selectedImage}
            />
            <View className={"ml-4"}>
              <AppText className="text-3xl font-bold ml-3">
                George Smith
              </AppText>
              <AppButton
                title="Edit Profile"
                className={"w-36 ml-3 "}
                color="bg-prim"
                textColor="text-white"
                onPress={() => navigation.navigate("Edit")}
              />
            </View>
          </View>
          <View className={"mt-5"}>
            <Image
              source={require("../assets/advChef.png")}
              style={{
                width: "100%",
                resizeMode: "contain",
                height: 150,
              }}
            />
          </View>
          <AppListItems
            items={[
              {
                name: "Your Account",
                options: [
                  {
                    title: "Personal Information",
                    onPress: () => {},
                  },
                  {
                    title: "Business Account",
                    onPress: () => {},
                  },
                  {
                    title: "Emergency Contact",
                    onPress: () => {},
                  },
                  {
                    title: "Change Password",
                    onPress: () => {},
                  },
                  {
                    title: "Change Theme",
                    onPress: () => {},
                  },
                ],
              },
              {
                name: "Settings",
                options: [
                  {
                    title: "Notification",
                    onPress: () => {},
                  },
                  {
                    title: "Logout",
                    onPress: () => {},
                  },
                  {
                    title: "Help Center",
                    onPress: () => {},
                  },
                  {
                    title: "Terms and Conditions",
                    onPress: () => {},
                  },
                  {
                    title: "Privacy Policy",
                    onPress: () => {},
                  },
                ],
              },
            ]}
          />
        </View>
      </Screen>
    </>
  );
}
