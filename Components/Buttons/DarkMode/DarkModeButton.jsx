"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import styles from "./styles.module.css";
function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // setTheme("dark");
  }, []);

  if (!mounted) {
    return null;
  }

  // const currentTheme = theme === "system" ? systemTheme : theme;
  // console.log(currentTheme);

  return (
    <div>
      {theme === "dark" ? (
        <SunIcon
          // className='h-8 w-8 cursor-pointer text-yellow-500'
          className={styles.light}
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className={styles.dark}
          // className='h-8 w-8 cursor-pointer text-gray-900'
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
