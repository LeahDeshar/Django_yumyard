import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomSheet, BottomSheetScrollView } from '@gorhom/bottom-sheet';

export const Test = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = [150, 300, '50%']; // Example snap points (can be numbers or percentages)

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Show Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0} // Index of the initial snap point (optional, defaults to 0)
        backgroundComponent={() => <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />}
      >
        <BottomSheetScrollView>
          {/* Content for your bottom sheet goes here */}
          <Text>Your Bottom Sheet Content</Text>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

// export default Test;
