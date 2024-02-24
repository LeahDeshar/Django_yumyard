import React, { useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ResizeMode, Video } from "expo-av";

const AppVideo = () => {
  const [status, setStatus] = React.useState({});

  const video = useRef(null);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/1.mp4")}
        resizeMode={ResizeMode.COVER}
        isLooping
        onError={(error) => console.log("Video playback error:", error)}
        shouldPlay
        onPlaybackStatusUpdate={(status) => {
          setStatus(() => status);
        }}
      />
      <View style={styles.controls}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={handlePlayPause}
        />
        <Button title="Stop" onPress={handleStop} />
      </View>
      <ProgressViewIOS
        style={styles.progress}
        progress={progress}
        progressTintColor="#007AFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 400,
  },
});

export default AppVideo;
