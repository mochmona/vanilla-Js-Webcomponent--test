class NavbarCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <nav>
        <ul class="menu">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
        <div class="brand">Brand</div>
        <div class="collapse">Collapse</div>
        <div class="social">Social</div>
      </nav>`;
  }
}
customElements.define("navbar-custom", NavbarCustom);

// Navbar
class NavbarOnScroll extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

        <style>

.container h1 {
    font-size: 4em;
    font-family: sans-serif;
    color: #444;
    text-align: center;
    margin-top: 25%;
  }
  
  .container {
    position: absolute;
    height: 200%;
    width: 100%;
  }
  
  
  .nav {
    padding: 20px;
    margin: 0;
    background-color: #542B72;
    width: 100%;
    position: fixed;
    opacity: 0;
  }
  
  .nav ul {
    overflow: hidden;
    list-style-type: none;
  }
  
  .nav li {
    float: left;
  }
  
  .nav li a {
    padding: 14px 35px;
    text-decoration: none;
    color: #9576AB;
    font-size: 1.2em;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    transition: color .4s;
  }
  
  .nav li a:hover {
    color: #DAC9E6;
  }
  
  .hide {
    display: none;
  }
  
  
  .fadein {
    animation: fade-in 1.2s forwards;
  }
  
  
  @keyframes fade-in{
    from {opacity: 0;}
    to {opacity: 1}
  }
        </style>
        

<div class="container">
<nav class="nav">
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">images</a></li>
    <li><a href="#">contact</a></li>
  </ul>
</nav> 
  <div class="h1"><h1>Scroll Down to see navbar!</h1></div>
  </div>
        `;

        const newNav = () => {
            let navigation = document.querySelector('.nav');
            window.addEventListener('scroll', () => {
              if(document.body.scrollTop > 200||document.documentElement.scrollTop > 200 ) {
                navigation.classList.add('fadein');
                navigation.classList.remove('hide');
              } else {
                navigation.classList.add('hide');
              }
            });
          
          }
          newNav();
  }
}
customElements.define("navbar-onscroll", NavbarOnScroll);


// NavbarScroll
class NavScroll extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<style>
            
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;
    position: absolute;
    top: 225px;
    width: 100%;
    z-index: -1;
    
  }
  
  .main-header {
    display: flex;
    justify-content: center;
    background: #0c0c17;
    position: relative;
    top: 0;
    color: white;
    font-size: larger;
    font-family: helvetica;
  }
  
  .nav-bar {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #303443;
    transition: background .5s
  }
  
  .nav-1 {
    transition: margin-right .5s ease;
  }
  
  .content {
    background: #c0c0c3;
    color: #414041;
  }
  
  .fixed {
    position: fixed;
    width: 100%;
    top: 0;
    background: #3c3c3c;
    color: #ececec;
    font-family: helvetica;
  }
  
  .toleft {
    margin-right: 50%;
  }
        
 </style>
        
        
<div class="main-header">
    <h1>Header</h1>
    </div>
      <section class="nav-bar">
        <h2 class="nav-1">Home</h2>
        <h2 class="nav-2">About</h2>
        <h2 class="nav-3">Contact</h2>
        <h2 class="nav-4">Log in</h2>
        <h2 class="nav-5">Sign in</h2>
         </section>
     <div class="content">
       <h3>Content</h3>
       <h3>Content</h3>
       <h3>Content</h3>
       <h3>Content</h3>
       <h3>Content</h3>
       <h3>Content</h3>
       <h3>Content</h3>
       <h3>Content</h3>
       <h3>Content</h3>
     </div>`;

    document.addEventListener("DOMContentLoaded", function () {
      const mainHeader = document.querySelector(".main-header");
      const navBar = document.querySelector(".nav-bar");
      const nav1 = document.querySelector(".nav-1");
      const navHeight = mainHeader.offsetHeight;

      function handleScroll() {
        if (window.scrollY > navHeight) {
          navBar.classList.add("fixed");
          nav1.classList.add("toleft");
        } else {
          navBar.classList.remove("fixed");
          nav1.classList.remove("toleft");
        }
      }

      window.addEventListener("scroll", handleScroll);
    });
  }
}
customElements.define("nav-scroll", NavScroll);

// refactor NavScroll


//NavbarSticky Banget 
class StickyNavbar extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
      <style>
/*
===========
DEMO DEPENDICES
===========
*/

@import "https://stas-melnikov.ru/r-blocks/r-list.css";
@import "https://stas-melnikov.ru/r-blocks/r-link.css";

html{
scroll-behavior: smooth;
}

.menu {
  position: sticky;
top: 0;
}

body{
margin: 0;	

font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
font-weight: 700;
text-transform: uppercase;
color: #fff;
}

.section{
height: 100vh;
font-size: 2.8rem;	

display: flex;
align-items: center;
justify-content: center;
}

.hero{
background-color: #9b59b6;
}

.header__scroll-down{
padding-top: 60px;	
color: #fff;
font-size: 1.6rem;

position: absolute;
bottom: 30px;
left: 50%;
z-index: 2;
transform: translateX(-50%);
}

.header__scroll-down::before{
content: "";
width: 6px;
height: 6px;

position: absolute;
top: 10px;
left: calc(50% - 3px);

background-color: #fff;
border-radius: 50%;
animation: scroll-down-animation 2s infinite;
box-sizing: border-box;
}

.header__scroll-down::after{
content: "";
box-sizing: border-box;
width: 30px;
height: 50px;

border: 2px solid #fff;
border-radius: 50px;

position: absolute;
top: 0;
left: calc(50% - 15px);  
}

@keyframes scroll-down-animation{

0%{
  transform: translate(0, 0);
  opacity: 0;
}

40%{
  opacity: 1;
}

80%{
  transform: translate(0, 20px);
  opacity: 0;
}

100%{
  opacity: 0;
}
}

.container{
padding-left: 10px;
padding-right: 10px;
text-align: center;
}

.menu__list{
box-sizing: border-box;
padding: 20px 3rem;		

position: absolute;
top: 0;
left: 0;

display: flex;
justify-content: center;
}

.menu__link{
color: inherit;
font-size: 1.8rem;
}

#about-me{
background-color: #54a0ff;
}

#works{
background-color: #10ac84;
}

#blog{
background-color: #ff6b6b;
}

#contacts{
background-color: #5f27cd;
}

@media (max-width: 639px){

html{
  font-size: 50%;
}	

.menu{
  text-align: center;
}

.menu__list{
  width: 100%;
}

.menu__group:first-of-type{
  display: none;
}

.menu__group:nth-child(n+2){
  margin-left: 10px;
}	
}

@media (min-width: 640px){

html{
  font-size: 62.5%;
}	

.menu__list{
  height: 100vh;
  flex-direction: column;
}

.menu__group:nth-child(n+2){
  margin-top: 10px;
}	
}
</style>
      
      
      <header id="home" class="section hero">
<div class="container">
  <span class="hero__text">Awesome hero screen</span>
  <a href="#about-me" class="r-link header__scroll-down">Scroll</a>
</div>
</header>
<nav class="menu">
<ul class="r-list menu__list">
  <li class="menu__group">
    <a href="#home" class="r-link menu__link">home</a>
  </li>
  <li class="menu__group">
    <a href="#about-me" class="r-link menu__link">about me</a>
  </li>
  <li class="menu__group">
    <a href="#works" class="r-link menu__link">works</a>
  </li>
  <li class="menu__group">
    <a href="#blog" class="r-link menu__link">blog</a>
  </li>
  <li class="menu__group">
    <a href="#contacts" class="r-link menu__link">contacts</a>
  </li>
</ul>
</nav>
<div id="about-me" class="section">
<div class="container"><span>about me</span></div>
</div>
<div id="works" class="section">
<div class="container"><span>works</span></div>
</div>
<div id="blog" class="section">
<div class="container"><span>blog</span></div>
</div>
<div id="contacts" class="section">
<div class="container"><span>contacts</span></div>
</div>`;
  }
}
customElements.define("sticky-nav", StickyNavbar);

