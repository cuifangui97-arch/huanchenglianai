import baseConfig from "./playwright.config";

// Use the installed Microsoft Edge channel when Chrome is unavailable.
export default {
  ...baseConfig,
  use: { ...baseConfig.use, channel: "msedge" },
};
