import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { server } from "./store";

// action login
export const login = (email, password) => async (dispatch) => {
  try {
    console.log("action", email, password);
    dispatch({
      type: "loginRequest",
    });
    // hitting node login api request
    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(data);
    dispatch({
      type: "loginSuccess",
      payload: data,
    });
    await AsyncStorage.setItem("@auth", data?.token);
    const stringifiedCurUser = JSON.stringify(data?.user);
    await AsyncStorage.setItem("@user", stringifiedCurUser);
    const stringifiedRole = JSON.stringify(data?.user.role);
    await AsyncStorage.setItem("@role", stringifiedRole);
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
// register action
export const register = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    dispatch({
      type: "registerRequest",
    });
    // hitapi register
    const { data } = await axios.post(`${server}/user/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "registerSucess",
      payload: data.msg,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "registerFail",
      payload: error.response.data.msg,
    });
  }
};

// GET USER DATTA ACTION\
// export const getUserData = () => async (dispatch) => {
//   try {
//     console.log("get profile");

//     dispatch({
//       type: "getUserDataRequest",
//     });
//     console.log("get profile");

//     // hitting node login api request
//     const { data } = await axios.get(`${server}/user/profile`);
//     console.log("get profile");
//     dispatch({
//       type: "getUserDataSucess",
//       payload: data?.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getUserDataFail",
//       payload: error?.response?.data?.message || "An error occured",
//     });
//   }
// };

export const getUserData = () => async (dispatch) => {
  try {
    console.log("get profile");

    dispatch({
      type: "getUserDataRequest",
    });
    console.log("get profile");

    // Get the token from wherever you have stored it
    const token = await AsyncStorage.getItem("@auth");

    // hitting node login api request
    const { data } = await axios.get(`${server}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("get profile");
    dispatch({
      type: "getUserDataSucess",
      payload: data?.user,
    });
    await AsyncStorage.setItem("@profile", JSON.stringify(data?.user));
  } catch (error) {
    console.error("Error fetching user data:", error);

    dispatch({
      type: "getUserDataFail",
      payload: error.message,
    });
  }
};

export const UpdateUserData =
  ({ email, name, address, phone }) =>
  async (dispatch) => {
    try {
      console.log("update profile", { email, name, address, phone });

      dispatch({
        type: "UpdateUserDataRequest",
      });
      console.log("update profile");

      // Get the token from wherever you have stored it
      const token = await AsyncStorage.getItem("@auth");

      // hitting node login api request
      const { data } = await axios.put(
        `${server}/user/profileUpdate`,
        { email, name, address, phone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("update profile");
      dispatch({
        type: "UpdateUserDataSucess",
        payload: data?.user,
      });
      await AsyncStorage.setItem("@profile", JSON.stringify(data?.user));
    } catch (error) {
      console.error("Error fetching user data:", error);

      dispatch({
        type: "UpdateUserDataFail",
        payload: error.message,
      });
    }
  };

export const UpdateUserProfileImage = (formData) => async (dispatch) => {
  try {
    console.log("update profile image", formData);

    dispatch({
      type: "updateProfilePictureRequest",
    });
    console.log("update profile");

    // Get the token from wherever you have stored it
    const token = await AsyncStorage.getItem("@auth");

    // hitting node login api request
    const { data } = await axios.put(`${server}/user/picUpdate`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("update profile");
    dispatch({
      type: "updateProfilePictureSuccess",
      payload: data?.user,
    });
    await AsyncStorage.setItem("@profile", JSON.stringify(data?.user));
  } catch (error) {
    console.error("Error fetching user data in profile update image:", error);

    dispatch({
      type: "updateProfilePictureFail",
      payload: error.message,
    });
  }
};
// LOGOUT ACTION
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    // hitting node login api request
    const { data } = await axios.get(`${server}/user/logout`);
    dispatch({
      type: "logoutSucess",
      payload: data?.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
