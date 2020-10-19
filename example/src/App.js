import React from "react";
import { useDevice } from "use-device-react";

const App = () => {
  const breakpoints = { tablet: 650, desktop: 1150 };

  const { isMobile, isDesktop, isTablet } = useDevice(breakpoints);
  return (
    <>
      <div>mobile: {String(isMobile)}</div>
      <div>desktop: {String(isDesktop)}</div>
      <div>tablet: {String(isTablet)}</div>
    </>
  );
};
export default App;
