import { FormikContextType, FormikValues, useFormikContext } from "formik";
import AppSwitch from "../AppSwitch";

import ErrorMessage from "./ErrorMessage";

export default function FormField({ name, my0, label, ...otherProps }) {
  const { errors, setFieldValue, touched, values } =
    useFormikContext < FormikContextType < FormikValues >> {};
  return (
    <>
      <AppSwitch
        my0={my0}
        label={label}
        value={values[name]}
        onValueChange={(newValue) => setFieldValue(name, newValue)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
