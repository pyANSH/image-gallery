import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../features/reducer/Miscellaneous/Miscellaneous";
export default function ThemeToggle() {
  const dispatch: any = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
    dispatch(toggleDarkMode(!isEnabled));
  };
  const updateTheme = (isDarkEnabled: boolean) => {
    // Get CSS variables for background/foreground
    const styles = getComputedStyle(document.body);
    const black = styles.getPropertyValue("--black");
    const white = styles.getPropertyValue("--white");
    const docEl = document.documentElement;

    if (isDarkEnabled) {
      docEl.style.setProperty("--background", black);
      docEl.style.setProperty("--foreground", white);
      document.querySelector("html")!.classList.add("darkmode");
    } else {
      docEl.style.setProperty("--background", white);
      docEl.style.setProperty("--foreground", black);
      document.querySelector("html")!.classList.remove("darkmode");
    }
  };
  useEffect(() => {
    updateTheme(isEnabled);
  }, [isEnabled]);

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>

        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          onChange={toggleState}
          checked={isEnabled}
        />
      </div>
    </label>
  );
}
