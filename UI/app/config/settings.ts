const settings = {
  dev: {},
  staging: {},
  prod: {},
};

const getCurrentSettings = () => {
  // eslint-disable-next-line no-undef
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
