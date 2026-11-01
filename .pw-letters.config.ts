import baseConfig from "./playwright.config";
export default {
  ...baseConfig,
  testMatch: ["ep04-letters.spec.ts"],
  use: { ...baseConfig.use, baseURL: "http://127.0.0.1:4189", channel: "msedge", viewport: { width: 390, height: 844 } },
  webServer: {
    command: "node node_modules/vite/bin/vite.js --config vite.runtime.config.ts --configLoader runner --host 127.0.0.1 --port 4189 --strictPort",
    url: "http://127.0.0.1:4189/",
    reuseExistingServer: true,
  },
};
