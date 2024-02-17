import {
  View,
  Text,
  Image,
  RefreshControl,
  TextInput,
  PanResponder,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import colors from "../config/colors";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import ImageInput from "../components/ImageInput";
import AppTextInput from "../components/AppTextInput";
import { ListItemSeparator } from "../components/lists";
import { StyleSheet } from "react-native";

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
            isImage={true}
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

      <BottomSheetModal
        handleIndicatorStyle={{
          display: "none",
        }}
        handleStyle={{
          display: "none",
        }}
        ref={BottomRef}
        index={0}
        snapPoints={[860]}
        backgroundStyle={{
          backgroundColor: colors.lightGray2,
        }}
      >
        <RecipeAddHeader />
        <RecipeAddBody />
      </BottomSheetModal>
    </Screen>
  );
};

export default AddRecipeScreen;

const RecipeAddHeader = () => {
  return (
    <View>
      <View className={"flex-row justify-between items-center mx-5 "}>
        <Entypo name="cross" size={29} color={colors.primary} />
        <View className={"flex-row items-center"}>
          <AppButton
            title="Save"
            className={"px-6 mr-3"}
            color={"bg-prim"}
            textColor="text-white"
          />
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

const RecipeAddBody = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };
  return (
    <View>
      <ImageInput
        onImageChange={handleImageChange}
        imageAsset={selectedImage}
      />
      <View className={"px-5 bg-lightGray pb-5"}>
        <View className={"pt-3"}>
          <TextInput
            placeholder="Enter Recipe Title"
            className={"text-lg py-2 pl-2"}
          />
          <ListItemSeparator color={colors.opacity} />
        </View>
        <View className={"pt-3"}>
          <TextInput
            placeholder="Enter Recipe Description"
            className={"text-lg py-2 pl-2"}
            multiline={true}
          />
          <ListItemSeparator color={colors.opactity} />
        </View>
        <View className={"pt-3"}>
          <View className={"flex-row justify-between items-center"}>
            <Text className={"text-lg pt-2 pl-2"}>Serves</Text>
            <View className="w-52">
              <TextInput
                placeholder="2 people"
                className={"text-lg py-2 pl-2"}
              />
              <ListItemSeparator color={colors.opacity} />
            </View>
          </View>
          <View className={"flex-row justify-between items-center"}>
            <Text className={"text-lg py-2 pl-2"}>Cook Time</Text>
            <View className="w-52">
              <TextInput
                placeholder="1hr 30 min"
                className={"text-lg py-2 pl-2"}
              />
              <ListItemSeparator color={colors.opacity} />
            </View>
          </View>
        </View>
      </View>
      <View
        className={"mt-3 pt-3 px-5 bg-lightGray pb-5"}
        style={{ height: 300 }}
      ></View>
    </View>
  );
};
