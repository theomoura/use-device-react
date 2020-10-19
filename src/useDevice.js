import { useState, useLayoutEffect } from "react";
import { debounce } from "debounce";

const useDevice = (breakpoints = { tablet: 700, desktop: 1200 }) => {
  const [isMobile, setMobile] = useState(
    window.innerWidth < breakpoints.tablet
  );
  const [isTablet, setTablet] = useState(
    window.innerWidth >= breakpoints.tablet &&
      window.innerWidth < breakpoints.desktop
  );
  const [isDesktop, setDesktop] = useState(
    window.innerWidth >= breakpoints.desktop
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < breakpoints.tablet);
      setTablet(
        window.innerWidth >= breakpoints.tablet &&
          window.innerWidth < breakpoints.desktop
      );
      setDesktop(window.innerWidth >= breakpoints.desktop);
    };

    const debounced = debounce(handleResize, 100);

    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
    };
  }, [breakpoints]);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useDevice;
