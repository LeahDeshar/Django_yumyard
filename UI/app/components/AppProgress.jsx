import { Modal, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

export default function AppProgress({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View className="flex-1 items-center justify-center">
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: { width: 150 },
});
