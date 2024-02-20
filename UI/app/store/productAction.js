import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { server } from "./store";

export const getAllProducts = () => async (dispatch) => {
  try {
    console.log("get Products");

    dispatch({
      type: "getAllProductRequest",
    });
    console.log("get category");

    const { data } = await axios.get(`${server}/products/getAll`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "getAllProductSuccess",
      payload: data?.products,
    });
    // console.log(data?.products);
    await AsyncStorage.setItem("@allproducts", JSON.stringify(data?.products));
  } catch (error) {
    console.error("Error fetching user data:", error);

    dispatch({
      type: "getAllProductFail",
      payload: error.message,
    });
  }
};

export const getTop6Products = () => async (dispatch) => {
  try {
    console.log("get Top 6 Products");

    dispatch({
      type: "getTopProductRequest",
    });
    console.log("get category");

    const { data } = await axios.get(`${server}/products/getTop`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "getTopProductSuccess",
      payload: data?.products,
    });
    // console.log(data?.products);
    await AsyncStorage.setItem("@topproducts", JSON.stringify(data?.products));
  } catch (error) {
    console.error("Error fetching user data:", error);

    dispatch({
      type: "getTopProductFail",
      payload: error.message,
    });
  }
};

export const getOneProducts =
  ({ id }) =>
  async (dispatch) => {
    try {
      console.log("get One Products");

      dispatch({
        type: "getOneProductRequest",
      });
      console.log("get one category");

      const { data } = await axios.get(
        `${server}/products/getOne/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "getOneProductSuccess",
        payload: data?.product,
      });
      console.log(data?.product);
      await AsyncStorage.setItem("@oneproduct", JSON.stringify(data?.product));
    } catch (error) {
      console.error("Error fetching user data:", error);

      dispatch({
        type: "getOneProductFail",
        payload: error.message,
      });
    }
  };
export const createProduct = (formData) => async (dispatch) => {
  try {
    console.log("form product", formData);

    dispatch({
      type: "createProductRequest",
    });
    const token = await AsyncStorage.getItem("@auth");
    const { data } = await axios.post(`${server}/products/create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(data?.products?._id);
    await AsyncStorage.setItem(
      "@newProduct",
      JSON.stringify(data?.products?._id)
    );
    dispatch({
      type: "createProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "createProductFail",
      payload: error.response.data.message,
    });
  }
};

export const AddProductImage =
  (formData, { id }) =>
  async (dispatch) => {
    try {
      console.log("add product image", formData, id);

      dispatch({
        type: "addImageProductRequest",
      });

      // Get the token from wherever you have stored it
      const token = await AsyncStorage.getItem("@auth");

      // hitting node login api request
      const { data } = await axios.put(
        `${server}/products/updateImage/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("product profile");
      dispatch({
        type: "addImageProductSuccess",
        payload: data?.message,
      });
      // await AsyncStorage.setItem("@profile", JSON.stringify(data?.user));
    } catch (error) {
      console.error("Error fetching adding image:", error);

      dispatch({
        type: "addImageProductFail",
        payload: error.message,
      });
    }
  };
export const DeleteProduct = (id) => async (dispatch) => {
  try {
    console.log("delete product", id);

    dispatch({
      type: "deleteProductRequest",
    });

    // Get the token from wherever you have stored it
    const token = await AsyncStorage.getItem("@auth");

    // hitting node login api request
    const { data } = await axios.delete(`${server}/products/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("product delete");
    dispatch({
      type: "deleteProductSuccess",
      payload: data?.message,
    });
    // await AsyncStorage.setItem("@profile", JSON.stringify(data?.user));
  } catch (error) {
    console.error("Error fetching adding image:", error);

    dispatch({
      type: "deleteProductFail",
      payload: error.message,
    });
  }
};
export const getMyProducts = () => async (dispatch) => {
  try {
    console.log("get my Products");

    dispatch({
      type: "getmyProductRequest",
    });
    console.log("get category");
    const token = await AsyncStorage.getItem("@auth");
    const { data } = await axios.get(`${server}/products/getAllProduct`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "getmyProductSuccess",
      payload: data?.products,
    });
    // console.log(data?.products);
    await AsyncStorage.setItem("@myproducts", JSON.stringify(data?.products));
  } catch (error) {
    console.error("Error fetching user data:", error);

    dispatch({
      type: "getmyProductFail",
      payload: error.message,
    });
  }
};
export const updateProduct =
  (formData, { id }) =>
  async (dispatch) => {
    try {
      console.log("form product", formData);

      dispatch({
        type: "updateProductRequest",
      });
      const token = await AsyncStorage.getItem("@auth");
      const { data } = await axios.put(
        `${server}/products/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "updateProductSuccess",
        payload: data.message,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "updateProductFail",
        payload: error.response.data.message,
      });
    }
  };
