module.exports = {
  staticFileGlobs: "/index.html",
  navigateFallback: "/index.html",
  navigateFallbackWhitelist: [/^(?!\/api\/|\/admin\/).*/]
};
