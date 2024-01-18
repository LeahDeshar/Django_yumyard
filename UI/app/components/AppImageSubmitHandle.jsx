import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormImagePicker } from "./forms";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image"),
});

const initialValues = {
  images: [],
};

const AppImageSubmitHandle = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          {/* Use FormImagePicker within your form */}
          <FormImagePicker name="images" label="Select Images" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppImageSubmitHandle;
