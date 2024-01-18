import React from "react";
import { View } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
const WithSwipeable = ({
  leftContentIconName,
  leftContentIconType,
  leftContentBackgroundColor,
  onLeftContentPress,
  rightContentIconName,
  rightContentIconType,
  rightContentBackgroundColor,
  onRightContentPress,
  title,
  subtitle,
}) => {
  return (
    <View>
      <ListItem.Swipeable
        leftWidth={80}
        rightWidth={90}
        minSlideWidth={40}
        leftContent={(action) => (
          <Button
            containerStyle={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: leftContentBackgroundColor || "#f4f4f4",
            }}
            type="clear"
            icon={{
              name: leftContentIconName || "archive-outline",
              type: leftContentIconType || "material-community",
            }}
            onPress={() => {
              if (onLeftContentPress) {
                onLeftContentPress();
              }
              action();
            }}
          />
        )}
        rightContent={(action) => (
          <Button
            containerStyle={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: rightContentBackgroundColor || "#f4f4f4",
            }}
            type="clear"
            icon={{
              name: rightContentIconName || "delete-outline",
              type: rightContentIconType || "material-community",
            }}
            onPress={() => {
              if (onRightContentPress) {
                onRightContentPress();
              }
              action();
            }}
          />
        )}
      >
        <Icon name="label-important-outline" type="material" />
        <ListItem.Content>
          <ListItem.Title>{title || "Default Title"}</ListItem.Title>
          <ListItem.Subtitle>
            {subtitle || "Default Subtitle"}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </View>
  );
};

export default WithSwipeable;
