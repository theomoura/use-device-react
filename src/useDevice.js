import { useState, useLayoutEffect } from "react";
import { debounce } from "debounce";

const useDevice = (mobileBreakpoint = 768) => {
  const [mobile, setMobile] = useState(window.innerWidth <= mobileBreakpoint);
  const [desktop, setDesktop] = useState(window.innerWidth > mobileBreakpoint);

  useLayoutEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= mobileBreakpoint);
      setDesktop(window.innerWidth > mobileBreakpoint);
    };

    const debounced = debounce(handleResize, 100);

    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
    };
  }, [mobileBreakpoint]);

  return {
    mobile,
    desktop,
  };
};

export default useDevice;
