import {
  View,
  Text,
  Image,
  RefreshControl,
  TextInput,
  PanResponder,
  Animated,
  TouchableOpacity,
  ScrollView,
  ActionSheetIOS,
} from "react-native";
// import { ScrollView } from "react-native-virtualized-view";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addNewRecipeToList } from "../store/recipeReducer";
import { fetchDataFromStorage } from "../store/localstorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AddRecipeScreen = () => {
  const BottomRef = useRef(null);

  const handlePresentModalPress = () => {
    BottomRef.current.present();
  };
  const handleCloseModalPress = () => {
    BottomRef.current.close();
  };

  const dispatch = useDispatch();

  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [serves, setServes] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([
    { key: 1, label: "Enter Ingredient 1" },
    { key: 2, label: "Enter Ingredient 2" },
  ]);
  const [method, setMethod] = useState([
    { key: "step1", description: "Step 1" },
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddRecipe = () => {
    const recipe = {
      recipeTitle,
      recipeDescription,
      serves,
      cookTime,
      ingredients,
      method,
    };
    console.log(recipe);
  };
  const handleImageChange = (image) => {
    console.log(image);
    setSelectedImage(image);
  };
  const addIngredient = () => {
    const newKey = ingredients.length + 1;
    setIngredients([
      ...ingredients,
      { key: newKey, label: `Enter Ingredient ${ingredients.length + 1}` },
    ]);
  };

  const [recipeLoad, setRecipeLoad] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const storedRecipeList = await AsyncStorage.getItem("recipe");
        const storedRecipe = JSON.parse(storedRecipeList);
        console.log("Recipe from AsyncStorage loading:", storedRecipe);
        setRecipeLoad(storedRecipe);
      } catch (error) {
        console.error("Error reading data from AsyncStorage:", error);
      }
    };
    fetchRecipe();
  }, []);
  console.log(recipeLoad);
  fetchDataFromStorage();
  const listofrecipe = useSelector((state) => state.recipe.recipe);
  console.log(listofrecipe);
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
        {recipeLoad?.map((i) => {
          return (
            <View
              className={
                "flex-row justify-between items-center bg-white rounded-2xl p-5 my-3"
              }
            >
              <Image
                source={{ uri: i.selectedImage }}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
              <View className={"w-52"}>
                <Text className={"text-lg font-semibold"}>{i.recipeTitle}</Text>
                <Text className={"text-mediumGray"}>{i.recipeDescription}</Text>
              </View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color={colors.primary}
              />
            </View>
          );
        })}
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
        <RecipeAddBody onCancel={handleCloseModalPress} />
      </BottomSheetModal>
    </Screen>
  );
};

export default AddRecipeScreen;

// const RecipeAddHeader = ({ onCancel, handleSaveButton, recipeInfo }) => {
//   const handlePress = () => {
//     const options = ["Save and Exit", "Discard Changes", "Cancel"];

//     ActionSheetIOS.showActionSheetWithOptions(
//       {
//         options: options,
//         cancelButtonIndex: options.length - 1,
//       },
//       (buttonIndex) => {
//         // Handle the selected option
//         switch (buttonIndex) {
//           case 0:
//             onCancel();
//             break;
//           case 1:
//             onCancel();
//             break;
//           case 2:
//             // Option 3 selected
//             break;
//           default:
//             // Cancel or tap outside the ActionSheet
//             break;
//         }
//       }
//     );
//   };

//   return (
//     <View>
//       <View className={"flex-row justify-between items-center mx-5 "}>
//         <TouchableOpacity onPress={handlePress}>
//           <AntDesign name="close" size={25} color={colors.primary} />
//         </TouchableOpacity>

//         <View className={"flex-row items-center"}>
//           <AppButton
//             title="Save"
//             className={"px-6  mr-3"}
//             color={"bg-prim"}
//             textColor="text-white"
//             onPress={handleSaveButton}
//           />
//           <MaterialCommunityIcons
//             name="dots-horizontal"
//             size={24}
//             color={colors.primary}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };
const RecipeAddBody = ({ onCancel }) => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [serves, setServes] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePress = () => {
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
  const handleImageChange = (image) => {
    console.log("fileee", image);
    setSelectedImage(image);
  };
  const [ingredients, setIngredients] = useState([
    { key: 0, label: "Enter Ingredient 1" },
    { key: 1, label: "Enter Ingredient 2" },
  ]);
  const [method, setMethod] = useState([
    { key: 0, description: "Step 1", image: null },
    { key: 1, description: "Step 2", image: null },
  ]);
  const addIngredient = () => {
    const newKey = ingredients.length + 1;
    setIngredients([
      ...ingredients,
      { key: newKey, label: `Enter Ingredient ${ingredients.length + 1}` },
    ]);
  };
  console.log("list", {
    recipeTitle,
    recipeDescription,
    serves,
    cookTime,
    selectedImage,
    ingredients,
    method,
  });
  const dispatch = useDispatch();
  const handleSaveButton = () => {
    console.log("saved");
    const recipe = {
      recipeTitle,
      recipeDescription,
      serves,
      cookTime,
      selectedImage,
      ingredients,
      method,
    };
    dispatch(addNewRecipeToList(recipe));
  };
  return (
    <View>
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
              onPress={handleSaveButton}
            />
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color={colors.primary}
            />
          </View>
        </View>
      </View>
      <ScrollView className={"mb-24"}>
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
                  onChangeText={(title) => setRecipeTitle(title)}
                />
              </View>
              <View className={"pt-3"}>
                <TextInput
                  placeholder="Enter Recipe Description"
                  className={"text-lg py-2 pl-2"}
                  multiline={true}
                  // value={recipeDescription}
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
                      // value={serves}
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
                      // value={cookTime}
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
          <Method steps={method} setSteps={setMethod} />
        </View>
      </ScrollView>
    </View>
  );
};
const SortableList = ({ data, setData }) => {
  const updateItemText = (index, text) => {
    const newData = [...data];
    newData[index] = { ...newData[index], label: text };
    setData(newData);
  };
  console.log(data, "data");

  const renderItem = ({ item, drag, isActive }) => {
    const index = data.findIndex((ingredient) => ingredient.key === item.key);

    return (
      <View className={"flex-row justify-between items-center py-2"}>
        <AntDesign name="close" size={21} color="black" />
        <View className="w-80 ">
          <TextInput
            placeholder={item.label}
            className={"pt-3 pb-1 my-2"}
            onChangeText={(text) => updateItemText(index, text)}
          />
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
      renderItem={({ item, index, drag, isActive }) =>
        renderItem({ item, index, drag, isActive })
      }
      keyExtractor={(item) => `draggable-item-${item.key}`}
      onDragEnd={onDragEnd}
      scrollEnabled={false}
    />
  );
};
const Method = ({ steps, setSteps }) => {
  const addStep = () => {
    const newKey = steps.length + 1;
    setSteps([
      ...steps,
      { key: newKey, description: `Step ${steps.length + 1}`, image: null },
    ]);
  };
  const updateItemText = (index, text) => {
    const newData = [...steps];
    newData[index] = {
      ...newData[index],
      description: text,
    };
    setSteps(newData);
  };
  const [selectedMethodImage, setSelectedMethodImage] = useState(null);
  console.log("selectedMethodImage", selectedMethodImage);
  const handleMethodImage = (image, index) => {
    const newData = [...steps];
    newData[index] = {
      ...newData[index],
      image: image,
    };

    setSelectedMethodImage(image);
    setSteps(newData);
  };

  const renderItem = ({ item, drag, isActive }) => {
    const addNumber = steps.findIndex((step) => step.key === item.key) + 1;
    const index = steps.findIndex((step) => step.key === item.key);
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
              onChangeText={(text) => updateItemText(index, text)}
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
            onImageChange={(image) => handleMethodImage(image, index)}
            imageAsset={selectedMethodImage}
          />
        </View>
      </>
    );
  };
  const onDragEnd = ({ data: newData }) => {
    console.log(newData);
    setSteps(newData);
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
