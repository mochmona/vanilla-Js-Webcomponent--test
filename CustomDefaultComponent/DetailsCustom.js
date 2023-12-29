class DetailTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
  <style>
  .container-detail {
    width : auto;
  }
  details {
    background: #edeff6;
    padding: 10px;
    border: 2px inset rgba(0, 0, 0, 0.185);
    border-radius: 10px;
    font-size: small;
  }
  summary {
    background: aliceblue;
    padding: 0.5em;
    border-radius: 5px;
    color: cornflowerblue;
    font-size: 18px;
    border-block-end: rgba(0, 0, 0, 0.384) 3px inset;
  }
  rt {
    text-align: left;
    font-size: 10px;
    color: cornflowerblue;
  }
</style>

<div class="container-detail">


<details>
<summary>vanilla component</summary>
<progress></progress>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
  dignissimos.
</p>
<ruby
  >Moch
  <rt>Design</rt>
</ruby>
</details>
</div>

        `;
  }
}
customElements.define("detail-tag", DetailTag);

/* edit width container details, cari metode untuk manipulasi animasi open closenya */