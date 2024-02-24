import React, { useRef, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ResizeMode, Video } from "expo-av";

const AppVideo = () => {
  const [status, setStatus] = React.useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const video = useRef(null);
  const handlePlayPause = () => {
    if (isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    video.current.stopAsync();
    setIsPlaying(false);
  };

  const handleProgress = (progress) => {
    setProgress(progress.positionMillis / status.durationMillis);
  };
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/1.mp4")}
        resizeMode={ResizeMode.COVER}
        onError={(error) => console.log("Video playback error:", error)}
        shouldPlay
        onPlaybackStatusUpdate={(status) => {
          setStatus(status);
          handleProgress(status);
        }}
      />
      <View className={"absolute  w-full justify-center items-center h-full"}>
        <View style={styles.controls}>
          <Button
            title={isPlaying ? "Pause" : "Play"}
            onPress={handlePlayPause}
          />
          <Button title="Stop" onPress={handleStop} />
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBar, { width: `${progress * 100}%` }]}
          ></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 400,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  progressBarContainer: {
    width: "90%",
    height: 10,
    backgroundColor: "#ccc",
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007AFF",
  },
});

export default AppVideo;
