import {
  View,
  Text,
  Image,
  RefreshControl,
  TextInput,
  PanResponder,
  Animated,
  TouchableOpacity,
  ActionSheetIOS,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useEffect, useRef, useState } from "react";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import colors from "../config/colors";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import ImageInput from "../components/ImageInput";
import AppTextInput from "../components/AppTextInput";
import { ListItemSeparator } from "../components/lists";
import { StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { useDispatch } from "react-redux";
import { addNewRecipeToList } from "../store/recipeReducer";
const AddRecipeScreen = () => {
  const BottomRef = useRef(null);

  const handlePresentModalPress = () => {
    BottomRef.current.present();
  };
  const handleCloseModalPress = () => {
    BottomRef.current.close();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNewRecipeToList({ recipe: "recipe" }));
  }, []);

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
        <RecipeAddHeader onCancel={handleCloseModalPress} />
        <ScrollView className={"mb-10"}>
          <RecipeAddBody />
          <Method />
        </ScrollView>
      </BottomSheetModal>
    </Screen>
  );
};

export default AddRecipeScreen;

const RecipeAddHeader = ({ onCancel }) => {
  const handlePress = () => {
    // Define options for the ActionSheet
    const options = ["Save and Exit", "Discard Changes", "Cancel"];

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options,
        cancelButtonIndex: options.length - 1,
      },
      (buttonIndex) => {
        // Handle the selected option
        switch (buttonIndex) {
          case 0:
            onCancel();
            break;
          case 1:
            onCancel();
            break;
          case 2:
            // Option 3 selected
            break;
          default:
            // Cancel or tap outside the ActionSheet
            break;
        }
      }
    );
  };
  return (
    <View>
      <View className={"flex-row justify-between items-center mx-5 "}>
        <TouchableOpacity onPress={handlePress}>
          <AntDesign name="close" size={25} color={colors.primary} />
        </TouchableOpacity>

        <View className={"flex-row items-center"}>
          <AppButton
            title="Save"
            className={"px-6  mr-3"}
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
  // State variables to store input field values
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [serves, setServes] = useState("");
  const [cookTime, setCookTime] = useState("");
  //  const [ingredients, setIngredients] = useState([]);
  //  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (image) => {
    console.log(image);
    setSelectedImage(image);
  };
  const [ingredients, setIngredients] = useState([
    { key: "item1", label: "Enter Ingredient 1" },
    { key: "item2", label: "Enter Ingredient 2" },
  ]);
  const addIngredient = () => {
    const newKey = `item${ingredients.length + 1}`;
    setIngredients([
      ...ingredients,
      { key: newKey, label: `Enter Ingredient ${ingredients.length + 1}` },
    ]);
  };

  return (
    <View>
      <ImageInput
        onImageChange={handleImageChange}
        imageAsset={selectedImage}
      />

      <View>
        <View className={"px-5 bg-lightGray pb-5"}>
          <View className={"pt-3"}>
            <TextInput
              placeholder="Enter Recipe Title"
              className={"text-lg py-2 pl-2"}
              value={recipeTitle}
              onChangeText={(text) => setRecipeTitle(text)}
            />
          </View>
          <View className={"pt-3"}>
            <TextInput
              placeholder="Enter Recipe Description"
              className={"text-lg py-2 pl-2"}
              multiline={true}
              value={recipeDescription}
              onChangeText={(text) => setRecipeDescription(text)}
            />
          </View>
          <View className={"pt-3"}>
            <View className={"flex-row justify-between items-center"}>
              <Text className={"text-lg pt-2 pl-2"}>Serves</Text>
              <View className="w-52">
                <TextInput
                  placeholder="2 people"
                  className={"text-lg py-2 pl-2"}
                  value={serves}
                  onChangeText={(text) => setServes(text)}
                />
              </View>
            </View>
            <View className={"flex-row justify-between items-center"}>
              <Text className={"text-lg py-2 pl-2"}>Cook Time</Text>
              <View className="w-52">
                <TextInput
                  placeholder="1hr 30 min"
                  className={"text-lg py-2 pl-2"}
                  value={cookTime}
                  onChangeText={(text) => setCookTime(text)}
                />
              </View>
            </View>
          </View>
        </View>

        <View className={"mt-3 py-5 px-5 bg-lightGray pb-5"}>
          <View className={"flex-row items-center"}>
            <Text className={"text-lg font-semibold pl-1 mr-4"}>
              Ingredients
            </Text>
            <TouchableOpacity onPress={addIngredient}>
              <Entypo name="add-to-list" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <SortableList data={ingredients} setData={setIngredients} />
        </View>
      </View>
    </View>
  );
};
const SortableList = ({ data, setData }) => {
  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <View className={"flex-row justify-between items-center py-2"}>
        <AntDesign name="close" size={21} color="black" />
        <View className="w-80 ">
          <TextInput placeholder={item.label} className={"pt-3 pb-1 my-2"} />
          <ListItemSeparator color={isActive ? colors.primary : colors.black} />
        </View>
        <MaterialIcons
          name="drag-handle"
          size={28}
          color="black"
          onLongPress={drag}
        />
      </View>
    );
  };

  const onDragEnd = ({ data: newData }) => {
    setData(newData);
  };

  return (
    <DraggableFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => `draggable-item-${item.key}`}
      onDragEnd={onDragEnd}
      scrollEnabled={false}
      // className={"py-10"}
    />
  );
};
const Method = () => {
  const [steps, setSteps] = useState([
    { key: "step1", description: "Step 1" },
    { key: "step2", description: "Step 2" },
  ]);

  const addStep = () => {
    const newKey = `step${steps.length + 1}`;
    setSteps([
      ...steps,
      { key: newKey, description: `Step ${steps.length + 1}` },
    ]);
  };

  const renderItem = ({ item, index, drag, isActive }) => {
    // const addNumber = index + 1;
    const addNumber = steps.findIndex((step) => step.key === item.key) + 1;
    return (
      <>
        <View
          className={"flex-row justify-between items-center py-2  bg-lightGray"}
        >
          <View
            style={{
              backgroundColor: colors.black,
              paddingHorizontal: 10,
              paddingVertical: 5,

              borderRadius: 25,
            }}
          >
            <Text className={" text-white"}>{addNumber}</Text>
          </View>
          <View className="w-80 ">
            <TextInput
              placeholder={item.description}
              className={"pt-3 pb-1 my-2 pl-3"}
            />
            <ListItemSeparator
              color={isActive ? colors.primary : colors.black}
            />
          </View>
          <View className={" justify-center"}>
            <AntDesign
              name="close"
              size={25}
              color="black"
              style={{
                top: 10,
              }}
            />
            <MaterialIcons
              name="drag-handle"
              size={25}
              color="black"
              onLongPress={drag}
              style={{
                top: 40,
              }}
            />
          </View>
        </View>
        <View className={"self-start  w-36"} style={{ borderRadius: 25 }}>
          <ImageInput
            isMethod
            onImageChange={handleImageChange}
            imageAsset={selectedImage}
          />
        </View>
      </>
    );
  };
  const onDragEnd = ({ data: newData }) => {
    console.log(newData);
    setSteps(newData);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  return (
    <View className={"mt-3 bg-lightGray pl-3 py-5"}>
      <Text className={"text-lg font-semibold pl-5"}>Method</Text>
      <View className={"mx-5"}>
        <DraggableFlatList
          data={steps}
          renderItem={renderItem}
          keyExtractor={(item) => `draggable-item-${item.key}`}
          onDragEnd={onDragEnd}
        />
      </View>
      <TouchableOpacity
        onPress={addStep}
        className={"flex-row items-center justify-center mt-8 my-5"}
      >
        <Ionicons name="add-outline" size={24} color="black" />

        <Text className={" ml-1 text-lg font-semibold"}>STEP</Text>
      </TouchableOpacity>
    </View>
  );
};
