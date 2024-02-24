import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { ResizeMode, Video } from "expo-av";

const AppVideo = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/1.mp4")}
        // useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 300, // Adjust height as needed
  },
});

export default AppVideo;
