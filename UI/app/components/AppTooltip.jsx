import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const AppTooltip = ({ content, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showTooltip}>{children}</TouchableOpacity>

      <Modal
        visible={isTooltipVisible}
        transparent
        animationType="slide"
        onRequestClose={hideTooltip}
      >
        <View style={styles.modalContainer}>
          <View style={styles.tooltip}>
            <Text>{content}</Text>
            <TouchableOpacity onPress={hideTooltip}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  tooltip: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  closeButton: {
    marginTop: 8,
    color: "blue",
  },
});

export default AppTooltip;
