class ButtonTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        #darkModeToggle{
            transition: ease-out .5s;
        }
    
        .btn-darkmode {
       
            background: #004a77;
            color: burlywood;
            padding: 0.5em;
            border-radius: 0.5em;
            transition: ease-in 1s;
          
        }
        .dark-mode {
          background: #181a21;
    
        }
        </style>
        
        
    <button id="darkModeToggle">Dark Mode</button>
    `;

    const darkModeToggle = document.querySelector("#darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
      document.querySelector("html").classList.toggle("dark-mode");
      document
        .querySelector("#darkModeToggle")
        .classList.toggle("btn-darkmode");

      console.log("kamu sudah Klik sebanyak");
    });
  }
}
customElements.define("custom-button", ButtonTag);
