export class MarqueeCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <marquee id="custom-marquee" direction="right" bgColor="yellow" loop="5" Scrollamount="10">
        <h1>marquee custom </h3>
    </marquee>
    
    <marquee behavior="slide" bgColor="green" >
        <h2>default marquee</h2>
        <h2>behavior slide</p>
    </marquee>
    
    <marquee behavior="scroll" bgColor="darkolivegreen" >
        <h2>default marquee</h2>
        <h2>behavior scroll</p>
    
    </marquee>
    
    <marquee behavior="alternate" >
        <h2>default marquee</h2>
        <h2>behavior alternate</p>
    
    </marquee>
    
    <div class="container">
        <h1>center block of div</h1>
        <h1>marquee shadowroot manipulation</h1>
    </div>
        
        `;
  }
}

customElements.define('marquee-component',MarqueeCustom);


