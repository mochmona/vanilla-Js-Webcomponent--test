class ProgressCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

        <style>
        progress{
            background: unset;
        }
        #custom-progress::-webkit-progress-value {
          background-color: yellow;
          border: 2px rgb(105, 133, 5) outset;
          box-shadow: 2px 2px 2px 0 black ;
          border-radius: 6px;
        }
        
        </style>
        
        
    <progress id="custom-progress" value="0" max="100"></progress>`;

    let value = 0;
    const interval = setInterval(() => {
      // value+= 1.67 ;// nilai penuh 100 dibagi 60 detik = 1.67
      value += 3.33; // nilai penuh 100 dibagi 30 detik = 3.33
      document.querySelector("#custom-progress").value = value;
      if (value >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
customElements.define("custom-progress",ProgressCustom);
