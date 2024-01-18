import React, { useState } from "react";
import { View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import Icon from "./Icon";

const AppAccordion = ({ icon, listData, title }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <ListItem.Accordion
        content={
          <>
            <Icon
              name={icon}
              size={25}
              style={{ color: "green" }}
              className="mx-3"
            />
            <ListItem.Content className="mx-3">
              <ListItem.Title className="">{title}</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        {listData.map((l, i) => (
          <ListItem
            key={i}
            onPress={() => console.log("Clicked on list 1")}
            bottomDivider
          >
            <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  );
};

export default AppAccordion;
