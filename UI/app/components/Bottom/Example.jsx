import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet/src";
// import BottomHeader from "./BottomHeader";
// import DriverInfo from "./DriverInfo";
// import Payment from "./Payment";
// import BottomFooter from "./BottomFooter";
const Example = () => {
  const BottomRef = useRef(null);
  useEffect(() => {
    BottomRef.current?.present();
  });

  return (
    <BottomSheetModal
      ref={BottomRef}
      index={0}
      snapPoints={[430, 550]}
      enablePanDownToClose={false}
      enableDismissOnClose={false}
    >
      <View>
        {/* <BottomHeader /> */}
        {/* <DriverInfo/> */}
        {/* <Payment /> */}
        {/* <BottomFooter /> */}
        <Text>Hello</Text>
      </View>
    </BottomSheetModal>
  );
};

export default Example;
