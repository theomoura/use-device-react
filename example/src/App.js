import React from "react";
import { useDevice } from "use-device-react";

const App = () => {
  const { mobile, desktop } = useDevice();
  return (
    <>
      <div>mobile: {String(mobile)}</div>
      <div>desktop: {String(desktop)}</div>
    </>
  );
};
export default App;
