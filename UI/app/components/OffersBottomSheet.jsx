// import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
// import { useEffect, useRef } from "react";
// import { useBearStore } from "../store";
// import { Alert, View } from "react-native";
// import AppText from "./AppText";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import AppButton from "./AppButton";
// import { ListItemSeparator } from "./lists";
// import * as Clipboard from "expo-clipboard";
// import { navigate } from "../navigation/routeNavigation";
// import routes from "../navigation/routes";

// export default function OffersBottomSheet() {
//   const activePromo = useBearStore((state) => state.activePromo);
//   const setActivePromo = useBearStore((state) => state.setActivePromo);

//   const bottomSheetRef = useRef < BottomSheet > null;
//   const snapPoints = [1, 600];

//   useEffect(() => {
//     if (activePromo) {
//       bottomSheetRef.current?.snapToIndex(1);
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [activePromo]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={0}
//       onChange={(index) => {
//         if (index === 0 || index === -1) {
//           setActivePromo(null);
//         }
//       }}
//       snapPoints={snapPoints}
//       enableDynamicSizing={false}
//       backdropComponent={(props) => {
//         return (
//           <BottomSheetBackdrop
//             {...props}
//             opacity={0.5}
//             disappearsOnIndex={0}
//             appearsOnIndex={1}
//           />
//         );
//       }}
//     >
//       <View className="p-5 py-2 items-center">
//         <MaterialCommunityIcons
//           color={activePromo?.color}
//           name="tag"
//           size={72}
//         />
//         <View className="m-2 mb-0 justify-between">
//           <AppText bigText className="font-bold">
//             Discount 15% off
//           </AppText>
//           <AppText className="text-mediumGray my-2">
//             Special Promo valid for Black Friday
//           </AppText>
//           <View className="mx-auto">
//             <AppButton
//               color="bg-primary"
//               textColor="text-white"
//               className="px-6"
//               title={`${activePromo?.code}`}
//               onPress={() => {
//                 Clipboard.setStringAsync(activePromo?.code || "");
//                 Alert.alert("Promo Code Copied to clipboard!");
//               }}
//               icon={
//                 <MaterialCommunityIcons
//                   name="content-copy"
//                   size={24}
//                   color="white"
//                 />
//               }
//             />
//           </View>
//         </View>
//         <View className="my-2 w-full">
//           <ListItemSeparator />
//         </View>
//         <View className="w-full">
//           <AppText className="text-mediumGray text-base">
//             Terms and Conditions
//           </AppText>
//           {[
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           ].map((item, index) => (
//             <View key={index} className="flex-row mb-1">
//               <AppText className="text-mediumGray text-sm">{"\u2022 "}</AppText>
//               <AppText className="text-mediumGray text-sm">{item}</AppText>
//             </View>
//           ))}
//           <AppButton
//             color="bg-primary"
//             textColor="text-white"
//             title="Apply Code"
//             onPress={() => {
//               setActivePromo(null);
//               Alert.alert("Promo Code applied for your next ride!");
//               navigate(routes.HOME, {
//                 promo: activePromo,
//               });
//             }}
//           />
//         </View>
//       </View>
//     </BottomSheet>
//   );
// }
// import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
// import { useEffect, useRef } from "react";
// import { useBearStore } from "../store";
// import { Alert, View, Text } from "react-native";
// import { n } from "nativewind";
// import AppText from "./AppText";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import AppButton from "./AppButton";
// import { ListItemSeparator } from "./lists";
// import * as Clipboard from "expo-clipboard";

// export default function OffersBottomSheet() {
//   const activePromo = useBearStore((state) => state.activePromo);
//   const setActivePromo = useBearStore((state) => state.setActivePromo);

//   const bottomSheetRef = useRef < BottomSheet > null;
//   const snapPoints = [1, 600];

//   useEffect(() => {
//     if (activePromo) {
//       bottomSheetRef.current?.snapToIndex(1);
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [activePromo]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={0}
//       onChange={(index) => {
//         if (index === 0 || index === -1) {
//           setActivePromo(null);
//         }
//       }}
//       snapPoints={snapPoints}
//       enableDynamicSizing={false}
//       backdropComponent={(props) => {
//         return (
//           <BottomSheetBackdrop
//             {...props}
//             opacity={0.5}
//             disappearsOnIndex={0}
//             appearsOnIndex={1}
//           />
//         );
//       }}
//     >
//       <View style={n("p-5 py-2 items-center")}>
//         <MaterialCommunityIcons
//           color={activePromo?.color}
//           name="tag"
//           size={72}
//         />
//         <View style={n("m-2 mb-0 justify-between")}>
//           <AppText bigText style={n("font-bold")}>
//             Discount 15% off
//           </AppText>
//           <AppText style={n("text-mediumGray my-2")}>
//             Special Promo valid for Black Friday
//           </AppText>
//           <View style={n("mx-auto")}>
//             <AppButton
//               color="bg-primary"
//               textColor="text-white"
//               style={n("px-6")}
//               title={`${activePromo?.code}`}
//               onPress={() => {
//                 Clipboard.setStringAsync(activePromo?.code || "");
//                 Alert.alert("Promo Code Copied to clipboard!");
//               }}
//               icon={
//                 <MaterialCommunityIcons
//                   name="content-copy"
//                   size={24}
//                   color="white"
//                 />
//               }
//             />
//           </View>
//         </View>
//         <View style={n("my-2 w-full")}>
//           <ListItemSeparator />
//         </View>
//         <View style={n("w-full")}>
//           <AppText style={n("text-mediumGray text-base")}>
//             Terms and Conditions
//           </AppText>
//           {[
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           ].map((item, index) => (
//             <View key={index} style={n("flex-row mb-1")}>
//               <AppText style={n("text-mediumGray text-sm")}>
//                 {"\u2022 "}
//               </AppText>
//               <AppText style={n("text-mediumGray text-sm")}>{item}</AppText>
//             </View>
//           ))}
//           <AppButton
//             color="bg-primary"
//             textColor="text-white"
//             title="Apply Code"
//             onPress={() => {
//               setActivePromo(null);
//               Alert.alert("Promo Code applied for your next ride!");
//             }}
//           />
//         </View>
//       </View>
//     </BottomSheet>
//   );
// }

// import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
// import { useEffect, useRef } from "react";
// import { useBearStore } from "../store";
// import { Alert, View, Text } from "react-native";
// import AppText from "./AppText";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import AppButton from "./AppButton";
// import { ListItemSeparator } from "./lists";
// import * as Clipboard from "expo-clipboard";

// export default function OffersBottomSheet() {
//   const activePromo = useBearStore((state) => state.activePromo);
//   const setActivePromo = useBearStore((state) => state.setActivePromo);

//   const bottomSheetRef = useRef(null);
//   const snapPoints = [1, 600];

//   useEffect(() => {
//     if (activePromo) {
//       bottomSheetRef.current?.snapToIndex(1);
//     } else {
//       bottomSheetRef.current?.close();
//     }
//   }, [activePromo]);

//   return (
//     <BottomSheet
//       ref={bottomSheetRef}
//       index={0}
//       onChange={(index) => {
//         if (index === 0 || index === -1) {
//           setActivePromo(null);
//         }
//       }}
//       snapPoints={snapPoints}
//       enableDynamicSizing={false}
//       backdropComponent={(props) => {
//         return (
//           <BottomSheetBackdrop
//             {...props}
//             opacity={0.5}
//             disappearsOnIndex={0}
//             appearsOnIndex={1}
//           />
//         );
//       }}
//     >
//       <View style={{ padding: 16, paddingTop: 10, alignItems: "center" }}>
//         <MaterialCommunityIcons
//           color={activePromo?.color}
//           name="tag"
//           size={72}
//         />
//         <View
//           style={{
//             margin: 2,
//             marginBottom: 0,
//             justifyContent: "space-between",
//           }}
//         >
//           <AppText style={{ fontWeight: "bold", fontSize: 20 }}>
//             Discount 15% off
//           </AppText>
//           <AppText style={{ color: "#666", marginVertical: 2 }}>
//             Special Promo valid for Black Friday
//           </AppText>
//           <View style={{ marginHorizontal: "auto" }}>
//             <AppButton
//               color="bg-primary"
//               textColor="text-white"
//               style={{ paddingHorizontal: 24 }}
//               title={`${activePromo?.code}`}
//               onPress={() => {
//                 Clipboard.setStringAsync(activePromo?.code || "");
//                 Alert.alert("Promo Code Copied to clipboard!");
//               }}
//               icon={
//                 <MaterialCommunityIcons
//                   name="content-copy"
//                   size={24}
//                   color="white"
//                 />
//               }
//             />
//           </View>
//         </View>
//         <View style={{ marginVertical: 2, width: "100%" }}>
//           <ListItemSeparator />
//         </View>
//         <View style={{ width: "100%" }}>
//           <AppText style={{ color: "#666", fontSize: 16 }}>
//             Terms and Conditions
//           </AppText>
//           {[
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//           ].map((item, index) => (
//             <View
//               key={index}
//               style={{ flexDirection: "row", marginVertical: 1 }}
//             >
//               <Text style={{ color: "#666", fontSize: 14 }}>{"\u2022 "}</Text>
//               <Text style={{ color: "#666", fontSize: 14 }}>{item}</Text>
//             </View>
//           ))}
//           <AppButton
//             color="bg-primary"
//             textColor="text-white"
//             title="Apply Code"
//             onPress={() => {
//               setActivePromo(null);
//               Alert.alert("Promo Code applied for your next ride!");
//             }}
//           />
//         </View>
//       </View>
//     </BottomSheet>
//   );
// }

import React, { useEffect, useRef } from "react";
import { Alert, View, Text } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./AppButton";
import { ListItemSeparator } from "./lists";
import * as Clipboard from "expo-clipboard";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useBearStore } from "../store";

export default function OffersBottomSheet() {
  const activePromo = useBearStore((state) => state.activePromo);
  const setActivePromo = useBearStore((state) => state.setActivePromo);

  const bottomSheetRef = useRef(null);
  const snapPoints = [1, 600]; // Changed snapPoints to [0, 600]
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };
  // useEffect(() => {
  //   if (activePromo) {
  //     bottomSheetRef.current?.snapToIndex(1);
  //   } else {
  //     bottomSheetRef.current?.close();
  //   }
  // }, [activePromo]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      // onChange={(index) => {
      //   if (index === 0 || index === -1) {
      //     setActivePromo(null);
      //   }
      // }}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      backdropComponent={(props) => {
        return (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            disappearsOnIndex={0}
            appearsOnIndex={1}
          />
        );
      }}
    >
      <View style={{ padding: 16, paddingTop: 10, alignItems: "center" }}>
        <MaterialCommunityIcons
          color={activePromo?.color}
          name="tag"
          size={72}
        />
        <View
          style={{
            margin: 2,
            marginBottom: 0,
            justifyContent: "space-between",
          }}
        >
          <AppText style={{ fontWeight: "bold", fontSize: 20 }}>
            Discount 15% off
          </AppText>
          <AppText style={{ color: "#666", marginVertical: 2 }}>
            Special Promo valid for Black Friday
          </AppText>
          <View style={{ marginHorizontal: "auto" }}>
            <AppButton
              color="bg-primary"
              textColor="text-white"
              style={{ paddingHorizontal: 24 }}
              title={`${activePromo?.code}`}
              onPress={() => {
                Clipboard.setStringAsync(activePromo?.code || "");
                Alert.alert("Promo Code Copied to clipboard!");
              }}
              icon={
                <MaterialCommunityIcons
                  name="content-copy"
                  size={24}
                  color="white"
                />
              }
            />
          </View>
        </View>
        <View style={{ marginVertical: 2, width: "100%" }}>
          <ListItemSeparator />
        </View>
        <View style={{ width: "100%" }}>
          <AppText style={{ color: "#666", fontSize: 16 }}>
            Terms and Conditions
          </AppText>
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ].map((item, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", marginVertical: 1 }}
            >
              <Text style={{ color: "#666", fontSize: 14 }}>{"\u2022 "}</Text>
              <Text style={{ color: "#666", fontSize: 14 }}>{item}</Text>
            </View>
          ))}
          <AppButton
            color="bg-primary"
            textColor="text-white"
            title="Apply Code"
            onPress={() => {
              setActivePromo(null);
              Alert.alert("Promo Code applied for your next ride!");
            }}
          />
        </View>
      </View>
    </BottomSheet>
  );
}
