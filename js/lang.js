const selectedLang = document.querySelector(".selected-lang");

const selectedLangImg = selectedLang.querySelector("img");

const langMenu = document.querySelector(".lang-menu ul");

const Menu1stLang = document.querySelector(".lang-menu ul li:nth-child(1) a");
const Menu2ndLang = document.querySelector(".lang-menu ul li:nth-child(2) a");

const englishImgURL = "http://127.0.0.1:8080/img/american.png";

const germanImgURL = "http://127.0.0.1:8080/img/german.png";

const showLangMenu = () => {
  langMenu.style.display = "flex";
};

const hideLangMenu = () => {
  langMenu.style.display = "none";
};

const checkSelectedLang = () => {
  if (selectedLangImg.src == englishImgURL) {
    return "en";
  } else if (selectedLangImg.src == germanImgURL) {
    return "de";
  }
};

const switchLangInMenu = () => {
  if (checkSelectedLang() == "en") {
    langMenu.querySelector("li:nth-child(1) a img").src = englishImgURL;
    langMenu.querySelector("li:nth-child(2) a img").src = germanImgURL;
  } else if (checkSelectedLang() == "de") {
    langMenu.querySelector("li:nth-child(1) a img").src = germanImgURL;
    langMenu.querySelector("li:nth-child(2) a img").src = englishImgURL;
  }
};

const changeSelectedLang = () => {
  if (checkSelectedLang() == "en") {
    selectedLangImg.src = germanImgURL;
    switchLangInMenu();
  } else if (checkSelectedLang() == "de") {
    selectedLangImg.src = englishImgURL;
    switchLangInMenu();
  }
};

const changeLang = () => {
  hideLangMenu();
  changeSelectedLang();
  if (checkSelectedLang() == "de") {
    window.location.href = "/de";
    // document.documentElement.lang("en").style.display = "none";
  } else if (checkSelectedLang() == "en") {
    window.location.href = "/../";
  }
};

selectedLang.addEventListener("click", showLangMenu);
Menu1stLang.addEventListener("click", hideLangMenu);
Menu2ndLang.addEventListener("click", changeLang);
