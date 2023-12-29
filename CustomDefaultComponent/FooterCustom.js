export class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <style>

    .footer-app {
        display: grid;
        place-items: center;
        background-color: #282828;
        min-height: 20vh;
        grid-template-columns: auto auto auto;
      }
      .item-footer {
        background-color: rgb(104 104 104);
        min-height: 100px;
        width: 33.33%;
        padding: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .child-item-footer {
        background: #ff5200;
        padding: 1em;
      }
      .active {
        background: cornflowerblue;
        padding: 0.5em;
        border-radius: 6px;
        transition: ease-in-out 0.5s;
      }
        </style>


    <marquee behavior="" direction="right" bgColor="#303443">
    <summary>
      refactor code ini dan make it simple and tough enough
    </summary>
    </marquee>

  <div class="footer-app">
    <div class="item-footer">
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
    </div>
    <div class="item-footer">
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
    </div>
    <div class="item-footer">
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
      <div class="child-item-footer">childItemFooter</div>
    </div>
  </div>
        
        `;
    // sebelum refactor 
      //let kakiWeb = document.querySelectorAll(".child-item-footer");
      //   console.log(kakiWeb);

      //   kakiWeb.forEach((item) => {
      //     item.addEventListener("click", changeColor);
      //   });

      //   function changeColor() {
      //     this.classList.toggle("active");
      //     // Get all child-item-footer elements except the clicked one
      //     const siblings = Array.from(this.parentNode.children).filter(
      //       (item) => item !== this
      //     );
      //     // Remove the 'active' class from all siblings
      //     siblings.forEach((item) => item.classList.remove("active"));
      //   }

    /* DRY code refactor */
    function delegate(parent, type, selector, handler) {
      parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);
        if (this.contains(targetElement)) {
          handler.call(targetElement, event);
        }
      });
    }

    delegate(
      document.querySelector(".footer-app"),
      "click",
      ".child-item-footer",
      function () {
        this.classList.toggle("active");
        // Get all child-item-footer elements except the clicked one
        const siblings = Array.from(this.parentNode.children).filter(
          (item) => item !== this
        );
        // Remove the 'active' class from all siblings
        siblings.forEach((item) => item.classList.remove("active"));
      }
    );
  }
}
customElements.define("custom-footer", FooterCustom);
