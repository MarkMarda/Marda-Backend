const toggleTheme = document.getElementById("toggle-theme");

const toggleIcon = document.getElementById("toggle-icon");

const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const traduction = document.getElementById("languages");

const translatedTexts = document.querySelectorAll("[data-section]");

//hacer otro document con el aboutme y luego usar con la funcion,
//problemas: quiza cambiar el nombre de la clase
//otra spucion seria cambiar el nombre del archico y usar la misma
//logica para la ruta nueva

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

// toggleColors.addEventListener("click", (e) => {

//   rootStyles.setProperty("--primary-color", e.target.dataset.color);

// });

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

//Footer component
const template = document.createElement("template");
template.innerHTML = `
<style> 
  p {
    display: inline;
    margin-buttom: 10%;
    background-color: aqua;
  }
  img {
    width: 10%;
  }
</style>
<p>
  Contact:
</P>
<img 
  src="./src/assets/images/github.svg" 
  class="tech-images" 
  alt="Github-image"
>
`

customElements.define("insert-footer", class extends HTMLElement {

  // constructor() {
  //   super();

  // }

  connectedCallback() {

    this.attachShadow({mode: "open"});

    this.shadowRoot.innerHTML = `
    <style> 
      p {
        display: inline;
        margin-buttom: 10%;
        background-color: aqua;
      }
      img {
        width: 10%;
      }
    </style>
    <p>
      Contact:
    </P>
    <img 
      src="./src/assets/images/github.svg" 
      class="tech-images" 
      alt="Github-image"
    >
    `

  }
})


function spanishTranslation() {

  const translation = document.querySelector(".container-eng");

  translation.innerHTML = `<h2>Sobre mi</h2>
  <p>
    Hola, Soy Marco, desarrollador web, corredor, senderista y muchas otras cosas mas.
  </p>
  <p>
    Me gusta leer tanto libros de ficcion como de no ficcion. Tambien corro y realizo senderismo en la naturaleza. Amo
    crear soluciones con tecnologia y esa es la razon por la cual elegi este camino.
  </p>
  <p>
    Puedo decirte mas cosas sobre mi, pero prefiero me conozcas para provartelo.
  </p>`

}

function englishVersion() {

  const translation = document.querySelector(".container-eng");

  translation.innerHTML = `<h2>About me</h2>
  <p>
    Hi I am Marco, a web developer, runner, hiker, and many other things.
  </p>
  <p>
    I like reading fiction books and non-fiction books. Also run and hike in the nature. I love create solutions with tecnology and this is te reason I choose this way.
  </p>
  <p>
    I can tell you more about me but I prefer you meet me to prove it.
  </p>`
}

