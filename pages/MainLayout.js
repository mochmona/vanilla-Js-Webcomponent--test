export class Layout extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <style>
        .container-nav {
          background: #181a21;
          /* color: wheat; */
          display: grid;
          place-items: strech;
          place-content: normal;
          min-height: 100vh;
          max-width: 100%;
        }
        header.header-app {
          background: #a6a6a6;
          height: 90px;
          width: 100%;
          position: fixed;
        }
        main.main-app {
          background: red;
          padding: 2em;
          margin: 5em;
        }
        section {
          min-height: 500px;
          border: 2px black inset;
        }
        footer.footer {
          min-height: 20em;
          background: #3c3c3c;
          border: 123px black inset;
          padding: 1em;
        }
      </style>
        
        <div class="container-nav">
        <header class="header-app">
        </header>
        <main class="main-app">
          <section class="section-app-1">contetn-1</section>
          <section class="section-app-2">contetn-2</section>
          <section class="section-app-3">contetn-3</section>
          <section class="section-app-4">contetn-4</section>
          <section class="section-app-5">contetn-5</section>
        </main>
        <footer class="footer"></footer>
      </div>`;
    }
}
customElements.define("layout-component", Layout);

// emmet
// .container-nav>header.header-app+main.main-app>(section.section-app-${contetn-$})*3^footer.footer
