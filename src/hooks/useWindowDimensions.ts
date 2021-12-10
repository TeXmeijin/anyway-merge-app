import { useState, useEffect, useCallback } from "react";

// https://ryotarch.com/javascript/react/get-window-size-with-react-hooks/
export const useWindowDimensions = () => {
  const isClient = typeof window === "object";
  const getWindowDimensions = useCallback(() => {
    return {
      width: isClient ? window?.innerWidth : 0,
      height: isClient ? window?.innerHeight : 0,
    };
  }, [isClient]);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getWindowDimensions]);
  return windowDimensions;
};
