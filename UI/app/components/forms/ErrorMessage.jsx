import AppText from "../AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText className="mb-1 px-3 text-red">{error}</AppText>;
}
