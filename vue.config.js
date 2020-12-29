module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    themeColor: "rgb(0, 119, 255)",
    msTileColor: "rgb(0, 119, 255)",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      name: "Cekcuaca", // <---- this is PWA name
      short_name: "Cekcuaca",
      display: "standalone",
      background_color: "rgb(0, 119, 255)",
      orientation: "portrait",
    },
  },
};
