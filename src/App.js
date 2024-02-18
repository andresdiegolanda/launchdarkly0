import React from "react";
import { withLDProvider, useFlags } from "launchdarkly-react-client-sdk";

function HelloWorld() {
  console.log("@@@Flags:", JSON.stringify(useFlags()));
  const { newui } = useFlags();
  return <div>{newui ? "New UI is enabled" : "New UI is disabled"}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
      </header>
    </div>
  );
}

// Placeholder for the secure mode hash generated server-side
const secureModeHash =
  "c539f7d70d3a90b3b69ac9505074e73cb1cbce892b1c9571403616dce4378756";

export default withLDProvider({
  clientSideID: "65c26dbe56d4c20fb9a1d78a", // Your LaunchDarkly client-side ID
  user: {
    key: "andresdiegolanda@gmail.com", // The unique user key
    hash: secureModeHash, // The secure mode hash generated server-side
  },
})(App);
