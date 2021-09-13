const settingsBox = document.querySelector(".settings-box");
const settingsIcon = document.querySelector(".settings-icon");
const animationSetting = document.querySelector(".animation-setting");
const animationOptionsBox = document.querySelector(".animation-options-box");
const viewSetting = document.querySelector(".view-setting");
const viewOptionsBox = document.querySelector(".view-options-box");
const home = document.querySelector("#home");

settingsIcon.addEventListener("mouseenter", () => {
  settingsBox.style.display = "flex";
});

home.addEventListener("mouseleave", () => {
  settingsBox.style.display = "none";
});

home.addEventListener("click", () => {
  settingsBox.style.display = "none";
});

animationSetting.addEventListener("mouseenter", () => {
  animationOptionsBox.style.display = "flex";
});

viewSetting.addEventListener("mouseenter", () => {
  viewOptionsBox.style.display = "flex";
});
