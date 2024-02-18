const LaunchDarkly = require("launchdarkly-node-server-sdk");

const sdkKey = "sdk-de99db2a-08fc-428e-8ea5-88646ca7def7"; // Use your server-side SDK key
const userKey = "andresdiegolanda@gmail.com"; // Replace with your user's unique key

const ldClient = LaunchDarkly.init(sdkKey);

ldClient
  .waitForInitialization()
  .then(() => {
    const user = { key: userKey };
    const hash = ldClient.secureModeHash(user);
    console.log("Secure Mode Hash for user:", hash);
    // Use this hash in your client-side initialization for the user
  })
  .catch((err) => {
    console.error("Error initializing LD client:", err);
  });
