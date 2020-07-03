import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [useDark, setUseDark] = useLocalStorage("dark", true);

  useEffect(() => {
    const body = document.querySelector("body");
    const footerBorder = document.querySelector(".footer-border");
    if (useDark) {
      body.classList.add("dark-mode");
      footerBorder && footerBorder.classList.add("footer-border-dark");
    } else {
      body.classList.remove("dark-mode");
      footerBorder && footerBorder.classList.remove("footer-border-dark");
    }
  }, [useDark]);

  return [useDark, setUseDark];
};
