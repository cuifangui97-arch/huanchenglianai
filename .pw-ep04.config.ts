import baseConfig from "./playwright.config";
export default {
  ...baseConfig,
  testMatch: ["home-progress.spec.ts"],
  use: { ...baseConfig.use, baseURL: "http://127.0.0.1:4190", channel: "msedge", viewport: { width: 1440, height: 1000 } },
  webServer: {
    command: "node node_modules/vite/bin/vite.js --config vite.runtime.config.ts --configLoader runner --host 127.0.0.1 --port 4190 --strictPort",
    url: "http://127.0.0.1:4190/",
    reuseExistingServer: true,
  },
};
