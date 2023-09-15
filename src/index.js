const toggleTheme = document.getElementById("toggle-theme");

const toggleIcon = document.getElementById("toggle-icon");

const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const traduction = document.getElementById("languages");

const translatedTexts = document.querySelectorAll("[data-section]");



toggleTheme.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(toggleIcon.src.includes("moon-solid.svg")) {
      toggleIcon.src = "src/assets/icons/sun-solid.svg";
      toggleText.textContent = "Light Mode";
    } else {
      toggleIcon.src = "src/assets/icons/moon-solid.svg";
      toggleText.textContent = "Dark Mode";
    }

});

const changeLanguage = async(language) => {

  const requestJson = await fetch(`src/languages/${language}.json`);
  const texts = await requestJson.json();
  
  for(let translatedText of translatedTexts) {

    const section = translatedText.dataset.section;
    const value = translatedText.dataset.value;
   
    translatedText.innerHTML = texts[section][value];

  }
  
}

traduction.addEventListener("click", (e) => {

  changeLanguage(e.target.parentElement.dataset.language);

});


