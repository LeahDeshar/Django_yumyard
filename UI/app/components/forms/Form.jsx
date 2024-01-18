import { Formik, FormikProps } from "formik";
import { ReactNode, Ref } from "react";

export default function Form({
  children,
  initialValues,
  onSubmit,
  formRef,
  validationSchema,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      innerRef={formRef}
      validationSchema={validationSchema}
    >
      {() => children}
    </Formik>
  );
}
