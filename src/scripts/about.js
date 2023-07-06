const toggleThemeAbout = document.getElementById("toggle-theme-about")

const toggleIconAbout = document.getElementById("about-icon");

const toggleTextAbout = document.getElementById("toggle-text-about");



//TODO: try with class
//clonar un elmento html

toggleThemeAbout.addEventListener("click", () => {
  
  document.body.classList.toggle("dark");
  const prueba = toggleIconAbout.src.includes("moon-solid.svg")
  if(prueba) {
    toggleIconAbout.src = "../assets/icons/sun-solid.svg"
    toggleTextAbout.textContent = "Light Mode";
  } else {
    toggleIconAbout.src = "../assets/icons/moon-solid.svg"
    toggleTextAbout.textContent = "Dark Mode";
  }

});

// TODO: Webe component para la funcionalidad
// function insertFooter() {

//   const insert = document.querySelector(".footer");

//   insert.innerHTML = 
// }

//Footer component
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
