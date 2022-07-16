/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@blocks": path.resolve(__dirname, "src/components/blocks"),
      "@elements": path.resolve(__dirname, "src/components/elements"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@generated": path.resolve(__dirname, "src/generated"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
