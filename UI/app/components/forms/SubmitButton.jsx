import { useFormikContext } from "formik";

import AppButton from "../AppButton";

export default function SubmitButton({ title, disabled = false }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton disabled={disabled} title={title} onPress={handleSubmit} />;
}
