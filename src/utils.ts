export const changeTheme = () => {
  const body = document.querySelector("body");

  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    body!.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body!.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
