// import { useEffect, useState } from "react";
// import * as ExpoLocation from "expo-location";
// import { Location } from "../screens/ListingEditScreen/models";

// interface LocationOutput {
//   location: Location | undefined;
//   error: Object;
// }

// export default function useLocation(): LocationOutput {
//   const [location, setLocation] = useState<Location>();
//   const [error, setError] = useState<any>({});

//   const getLocation = async () => {
//     try {
//       const { granted } =
//         await ExpoLocation.requestForegroundPermissionsAsync();
//       if (!granted) {
//         alert("You need to enable permission to access the location.");
//         return;
//       }
//       const result = await ExpoLocation.getCurrentPositionAsync();
//       if (result) {
//         const {
//           coords: { latitude, longitude },
//         } = result;
//         setLocation({ latitude, longitude });
//       } else {
//         setError({ message: "Something went wrong while getting location." });
//       }
//     } catch (err) {
//       setError(err);
//     }
//   };

//   useEffect(() => {
//     getLocation();
//   }, []);

//   return { location, error };
// }
