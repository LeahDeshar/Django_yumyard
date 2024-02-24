// import React, { useEffect, useRef } from "react";
// import { View, StyleSheet, Button } from "react-native";
// import { ResizeMode, Video } from "expo-av";

// const AppVideo = () => {
//   const [status, setStatus] = React.useState({});

//   const video = useRef(null);

//   const handleBlur = () => {
//     if (video.current) {
//       video.current.pauseAsync();
//     }
//   };
//   useEffect(() => {
//     return () => {
//       handleBlur();
//     };
//   }, []);
//   return (
//     <View>
//       <Video
//         ref={video}
//         style={styles.video}
//         source={require("../assets/videos/1.mp4")}
//         useNativeControls
//         resizeMode={ResizeMode.COVER}
//         isLooping
//         onError={(error) => console.log("Video playback error:", error)}
//         shouldPlay
//         onPlaybackStatusUpdate={(status) => {
//           if (!status.isPlaying) {
//             handleBlur();
//           }
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   video: {
//     width: "100%",
//     height: 300, // Adjust height as needed
//   },
// });

// export default AppVideo;
import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

const AppVideo = () => {
  const video = useRef(null);

  const handlePlay = async () => {
    if (video.current) {
      await video.current.playAsync();
    }
  };

  const handlePause = async () => {
    if (video.current) {
      await video.current.pauseAsync();
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      handlePlay();

      return () => {
        handlePause();
      };
    }, [])
  );

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/1.mp4")}
        // useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        onError={(error) => console.log("Video playback error:", error)}
      />
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
