// import { useEffect, useState } from "react";
// import { Image, TouchableOpacity, Alert } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";

// import colors from "../config/colors";
// import { ImageAssetOrString } from "./forms/FormImagePicker";

// export default function ImageInput({ onImageChange, imageAsset }) {
//   // const requestMediaLibraryPermissionsAsync = async () => {
//   //   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   //   if (!granted) alert("You need to enable permissions to acess the library");
//   // };

//   // useEffect(() => {
//   //   requestMediaLibraryPermissionsAsync();
//   // }, []);

//   // const handlePress = () => {
//   //   if (!imageAsset) showPickerOptions();
//   //   else
//   //     Alert.alert("Delete?", "Are you sure you want to delete this image?", [
//   //       { text: "Yes", onPress: () => onImageChange([imageAsset]) },
//   //       { text: "No" },
//   //     ]);
//   // };
//   // console.log(imageAsset?.uri);

//   // const handleImageSelect = async () => {
//   //   try {
//   //     const result = await ImagePicker.launchImageLibraryAsync({
//   //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//   //       quality: 0.5,
//   //     });
//   //     if (!result.canceled) onImageChange(result.assets);
//   //   } catch (error) {
//   //     throw new Error("Error reading the image", error);
//   //   }
//   // };
//   // const takePhoto = async () => {
//   //   try {
//   //     const result = await ImagePicker.launchCameraAsync({
//   //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//   //       allowsEditing: true,
//   //       aspect: [4, 3],
//   //       quality: 1,
//   //     });

//   //     if (!result.canceled) onImageChange(result.assets);
//   //   } catch (error) {
//   //     throw new Error("Error reading the image", error);
//   //   }
//   // };
//   // const showPickerOptions = () => {
//   //   Alert.alert(
//   //     "Select Image",
//   //     "Choose an option to select image",
//   //     [
//   //       {
//   //         text: "Pick from Gallery",
//   //         onPress: handleImageSelect,
//   //       },
//   //       {
//   //         text: "Take Photo",
//   //         onPress: takePhoto,
//   //       },
//   //       {
//   //         text: "Cancel",
//   //         style: "cancel",
//   //       },
//   //     ],
//   //     { cancelable: true }
//   //   );
//   // };
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (image) => {
//     setSelectedImage(image);
//   };
//   const handleSelectImage = async () => {
//     try {
//       const permissionResultLibrary =
//         await ImagePicker.requestMediaLibraryPermissionsAsync();
//       const permissionResultCamera =
//         await ImagePicker.requestCameraPermissionsAsync();
//       if (!permissionResultLibrary.granted || !permissionResultCamera.granted) {
//         alert("Permission to access camera roll and camera is required!");
//         return;
//       }

//       const options = ["Take Photo", "Choose from Library", "Cancel"];
//       const selectedIndex = await new Promise((resolve) => {
//         Alert.alert(
//           "Select Image Source",
//           null,
//           options.map((option, index) => ({
//             text: option,
//             onPress: () => resolve(index),
//           }))
//         );
//       });

//       if (selectedIndex === 0) {
//         // User selected 'Take Photo'
//         const pickerResult = await ImagePicker.launchCameraAsync({
//           allowsEditing: true,
//           quality: 1,
//         });
//         handleImagePickerResult(pickerResult);
//       } else if (selectedIndex === 1) {
//         // User selected 'Choose from Library'
//         const pickerResult = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.Images,
//           allowsEditing: true,
//           quality: 1,
//         });
//         handleImagePickerResult(pickerResult);
//       }
//     } catch (error) {
//       console.log("Error picking an image:", error);
//     }
//   };

//   const handleImagePickerResult = (pickerResult) => {
//     if (!pickerResult.canceled && pickerResult.assets.length > 0) {
//       const firstAsset = pickerResult.assets[0];
//       setSelectedImage(firstAsset.uri);

//       let formData = new FormData();
//       formData.append("file", {
//         uri: firstAsset.uri,
//         type: "image/png",
//         name: "profilePic.png",
//       });
//     }
//   };
//   const content = selectedImage ? (
//     <Image
//       source={{
//         uri:
//           typeof imageAsset === "string"
//              ` ${imageAsset[0]?.uri}`
//             : imageAsset[0]?.uri,
//       }}
//       className="h-full w-full"
//     />
//   ) : (
//     <MaterialCommunityIcons
//       color={colors.mediumGray}
//       name="camera"
//       size={100}
//     />
//   );

//   return (
//     <TouchableOpacity
//       className="h-28 w-28 items-center justify-center overflow-hidden rounded-xl bg-lightGray"
//       onPress={handleSelectImage}
//     >
//       {content}
//     </TouchableOpacity>
//   );
// }

import React, { useState } from "react";
import { TouchableOpacity, Image, Alert, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Make sure you import necessary icons from Expo package
import colors from "../config/colors";

function ImageInput({ isMethod = false, isProfile = false, onImageChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log("selectedImage", selectedImage);

  const handleImageChange = (image) => {
    setSelectedImage(image);
    // onImageChange()
  };

  const handleSelectImage = async () => {
    try {
      const permissionResultLibrary =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      const permissionResultCamera =
        await ImagePicker.requestCameraPermissionsAsync();
      if (!permissionResultLibrary.granted || !permissionResultCamera.granted) {
        Alert.alert(
          "Permission Required",
          "Please grant permission to access camera roll and camera."
        );
        return;
      }

      const options = ["Take Photo", "Choose from Library", "Cancel"];
      const selectedIndex = await new Promise((resolve) => {
        Alert.alert(
          "Select Image Source",
          null,
          options.map((option, index) => ({
            text: option,
            onPress: () => resolve(index),
          }))
        );
      });

      if (selectedIndex === 0) {
        const pickerResult = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          quality: 1,
        });
        handleImagePickerResult(pickerResult);
      } else if (selectedIndex === 1) {
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
        handleImagePickerResult(pickerResult);
      }
    } catch (error) {
      console.log("Error picking an image:", error);
    }
  };

  const handleImagePickerResult = (pickerResult) => {
    if (!pickerResult.canceled && pickerResult.assets.length > 0) {
      const firstAsset = pickerResult.assets[0];
      setSelectedImage(firstAsset.uri);
      onImageChange(firstAsset.uri);

      let formData = new FormData();
      formData.append("file", {
        uri: firstAsset.uri,
        type: "image/png",
        name: "profilePic.png",
      });
    }
  };

  const content = selectedImage ? (
    <Image
      source={{ uri: selectedImage }}
      style={{
        height: isMethod ? 150 : isProfile ? 100 : 200,
        borderRadius: isMethod ? 25 : isProfile ? 150 : 10,
        width: "100%",
      }}
    />
  ) : (
    <View
      className={` ${"justify-center align-center "} bg-grey 
      }`}
      style={{
        width: "100%",
        height: isMethod ? 150 : isProfile ? 130 : 200,
        borderRadius: isMethod ? 25 : isProfile ? 250 : 0,
      }}
    >
      <MaterialCommunityIcons
        name="camera"
        size={isMethod ? 90 : isProfile ? 75 : 100}
        style={{
          textAlign: "center",
          color: colors.secondary,
        }}
      />
      {!isMethod && !isProfile ? (
        <>
          <Text className={"text-center text-white font-semibold text-2xl"}>
            Upload recipe photo
          </Text>
          <Text className={"text-center text-white"}>
            Inspire others to cook your dish
          </Text>
        </>
      ) : null}
    </View>
  );

  return (
    <TouchableOpacity
      className={` ${
        isProfile ? "w-24" : "justify-center items-center w-full"
      }  overflow-hidden `}
      // style={{
      //   width: "100%",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   overflow: "hidden",
      // }}
      onPress={handleSelectImage}
    >
      {content}
    </TouchableOpacity>
  );
}

export default ImageInput;
