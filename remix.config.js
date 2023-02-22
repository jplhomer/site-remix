/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: "esm",
  serverDependenciesToBundle: ["@remix-run/react"],
  future: {
    unstable_postcss: true,
    unstable_tailwind: true,
    unstable_dev: {
      appServerPort: 3000,
      rebuildPollIntervalMs: 500,
    },
  },
};
