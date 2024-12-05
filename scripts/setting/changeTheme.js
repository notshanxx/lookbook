// Theme Switcher

const themeSwitch = document.getElementById("theme-switch")

themeSwitch.addEventListener("click", () => {
  if (themeSwitch.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
    themeSwitch.checked = storedTheme === "dark";
  }
});
