// import { FormikContextType, FormikValues, useFormikContext } from "formik";
// import * as ImagePicker from "expo-image-picker";

// import ErrorMessage from "./ErrorMessage";
// import ImageInputList from "../ImageInputList";
// import AppText from "../AppText";

// export type ImageAssetOrString = ImagePicker.ImagePickerAsset | string;

// export default function FormImagePicker({
//   name,
//   label,
// }: {
//   name: string;
//   label: string;
// }) {
//   const { errors, setFieldValue, touched, values } =
//     useFormikContext<FormikContextType<FormikValues>>();
//   const imageAssets: ImageAssetOrString[] = values[name];

//   const handleImageAdd = (assets: ImageAssetOrString[]) => {
//     setFieldValue(name, [...imageAssets, assets]);
//   };

//   const handleImageRemove = (asset: ImageAssetOrString) => {
//     setFieldValue(
//       name,
//       imageAssets.filter((imageAsset: ImageAssetOrString) => {
//         if (typeof asset === "string" && typeof imageAsset === "string") {
//           return imageAsset !== asset;
//         }
//         if (typeof asset === "string" || typeof imageAsset === "string") {
//           return false;
//         }
//         return imageAsset[0].uri !== asset[0].uri;
//       })
//     );
//   };

//   return (
//     <>
//       {label ? (
//         <AppText className="mx-3 my-2 text-sm text-mediumGray">{label}</AppText>
//       ) : null}
//       <ImageInputList
//         imageAssets={imageAssets}
//         onImageAdd={handleImageAdd}
//         onImageRemove={handleImageRemove}
//       />
//       <ErrorMessage error={errors[name]} visible={touched[name]} />
//     </>
//   );
// }

import React from "react";
import { useFormikContext } from "formik";
import * as ImagePicker from "expo-image-picker";
import { View } from "react-native";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import AppText from "../AppText";

export default function FormImagePicker({ name, label }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageAssets = values[name];

  const handleImageAdd = (assets) => {
    setFieldValue(name, [...imageAssets, assets]);
  };

  const handleImageRemove = (asset) => {
    setFieldValue(
      name,
      imageAssets.filter((imageAsset) => {
        if (typeof asset === "string" && typeof imageAsset === "string") {
          return imageAsset !== asset;
        }
        if (typeof asset === "string" || typeof imageAsset === "string") {
          return false;
        }
        return imageAsset[0].uri !== asset[0].uri;
      })
    );
  };

  return (
    <View>
      {label ? (
        <AppText
          style={{
            marginHorizontal: 3,
            marginVertical: 2,
            fontSize: 14,
            color: "#666",
          }}
        >
          {label}
        </AppText>
      ) : null}
      <ImageInputList
        imageAssets={imageAssets}
        onImageAdd={handleImageAdd}
        onImageRemove={handleImageRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}
