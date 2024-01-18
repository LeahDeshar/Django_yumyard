import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { ListItemSeparator } from "../components/lists";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import WithSwipeable from "../components/lists/WithSwipeable";
import GridList from "../components/lists/GridList";
import HVCardView from "../components/HVCardView";
import AppAccordion from "../components/AppAccordion";
import AppTooltip from "../components/AppTooltip";
import Login from "./Login";
import Register from "./Register";

const ServiceType = {
  UPCOMING: "Upcoming",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};

const serviceColorMap = {
  [ServiceType.UPCOMING]: "#F09E00",
  [ServiceType.COMPLETED]: "green",
  [ServiceType.CANCELLED]: "red",
};

const rides = [
  {
    id: 1,
    status: ServiceType.COMPLETED,
    dateTime: "2023-01-01T08:30:00",
    pickLocation: "City Park",
    dropLocation: "Example City",
    riderName: "John Doe",
    vehicleName: "Pulsar 200",
  },
  {
    id: 2,
    status: ServiceType.UPCOMING,
    dateTime: "2023-01-05T14:45:00",
    pickLocation: "Nagarjun,Budhanilkantha",
    dropLocation: "Lagankhel,Lalitpur",
    riderName: "Jane Doe",
    vehicleName: "Pulsar 200",
  },
  {
    id: 3,
    status: ServiceType.CANCELLED,
    dateTime: "2023-02-10T18:20:00",
    pickLocation: "Downtown",
    dropLocation: "Example City",
    riderName: "Bob Smith",
    vehicleName: "Motorcycle",
  },
  {
    id: 4,
    status: ServiceType.COMPLETED,
    dateTime: "2023-02-15T09:10:00",
    pickLocation: "Mountain Trail",
    dropLocation: "Example City",
    riderName: "Alice Johnson",
    vehicleName: "Electric Skateboard",
  },
  {
    id: 5,
    status: ServiceType.UPCOMING,
    dateTime: "2023-03-05T12:30:00",
    pickLocation: "Nagarjun,Budhanilkantha",
    dropLocation: "Example City",
    riderName: "Charlie Brown",
    vehicleName: "Pulsar 200",
  },
  {
    id: 6,
    status: ServiceType.CANCELLED,
    dateTime: "2023-03-20T17:15:00",
    pickLocation: "Industrial Area",
    dropLocation: "Example City",
    riderName: "Eva Miller",
    vehicleName: "Skateboard",
  },
  {
    id: 7,
    status: ServiceType.COMPLETED,
    dateTime: "2023-04-02T11:45:00",
    pickLocation: "Rural Trail",
    dropLocation: "Example City",
    riderName: "David White",
    vehicleName: "Mountain Bike",
  },
  {
    id: 8,
    status: ServiceType.UPCOMING,
    dateTime: "2023-04-10T14:00:00",
    pickLocation: "Nagarjun,Budhanilkantha",
    dropLocation: "Example City",
    riderName: "Sophia Davis",
    vehicleName: "Pulsar 200",
  },
  {
    id: 9,
    status: ServiceType.CANCELLED,
    dateTime: "2023-05-03T16:30:00",
    pickLocation: "Shopping District",
    dropLocation: "Example City",
    riderName: "Michael Wilson",
    vehicleName: "Segway",
  },
  {
    id: 10,
    status: ServiceType.COMPLETED,
    dateTime: "2023-05-15T07:20:00",
    pickLocation: "Lake Shore",
    dropLocation: "Example City",
    riderName: "Olivia Turner",
    vehicleName: "Rowboat",
  },
  {
    id: 11,
    status: ServiceType.UPCOMING,
    dateTime: "2023-01-05T14:45:00",
    pickLocation: "Nagarjun,Budhanilkantha",
    dropLocation: "Lagankhel,Lalitpur",
    riderName: "Jane Doe",
    vehicleName: "Pulsar 200",
  },
  {
    id: 12,
    status: ServiceType.UPCOMING,
    dateTime: "2023-01-05T14:45:00",
    pickLocation: "Nagarjun,Budhanilkantha",
    dropLocation: "Lagankhel,Lalitpur",
    riderName: "Jane Doe",
    vehicleName: "Pulsar 200",
  },
  {
    id: 13,
    status: ServiceType.UPCOMING,
    dateTime: "2023-01-05T14:45:00",
    pickLocation: "Nagarjun,Budhanilkantha",
    dropLocation: "Lagankhel,Lalitpur",
    riderName: "Jane Doe",
    vehicleName: "Pulsar 200",
  },
];

function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function HistoryScreen() {
  const [serviceType, setServiceType] = useState(ServiceType.UPCOMING);

  return (
    <Screen noKeyboardAwareScroll>
      {/* <Login /> */}
      <Register />
      {/* <View>
        {Object.values(ServiceType).map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => {
              setServiceType(type);
            }}
          >
            <AppText>{toTitleCase(type)}</AppText>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View>
          {rides
            .filter((activity) => activity.status === serviceType)
            .map((activity, index) => (
              <ActivityContent
                key={activity.id}
                index={index}
                activity={activity}
              />
            ))}
        </View>
      </ScrollView> */}
    </Screen>
  );
}

function ActivityContent({ activity, index }) {
  const formatDateTime = (dateTime) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(dateTime));

    return formattedDate;
  };

  return (
    <>
      {/* {index === 0 ? null : (
        <View>
          <ListItemSeparator />
        </View>
      )}
      <TouchableHighlight
        accessibilityRole="button"
        underlayColor={colors.highlight}
      >
        <View>
          <View>
            <Text
              style={{
                color: serviceColorMap[activity.status],
              }}
            >
              {activity.status}
            </Text>
            <Text>{formatDateTime(activity.dateTime)}</Text>
          </View>
          <View>
            <View>
              <MaterialIcons
                color={colors.primary}
                name="my-location"
                size={25}
              />
              <Text>{activity.pickLocation}</Text>
            </View>
            <View>
              <MaterialIcons
                color={colors.primary}
                name="location-on"
                size={25}
              />
              <Text>{activity.dropLocation}</Text>
            </View>
          </View>
          <View>
            <Text>{activity.riderName}</Text>
            <Text>{activity.vehicleName}</Text>
          </View>
        </View>
      </TouchableHighlight> */}
    </>
  );
}

export default HistoryScreen;
