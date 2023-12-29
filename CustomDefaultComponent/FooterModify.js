class FooterModify extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
 

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }
    
    body{
      font-family: 'Montserrat', sans-serif;
    }
    
    .main-footer {
      padding: 70px 0;
      display: flex;
      justify-content: space-evenly;
      background-color:#181a21;
    }
    
    .main-footer ul {
      list-style: none;
    }
    
    .main-footer h1 {
      font-size: 22px;
      line-height: 117%;
      color: #ffffff;
      margin-bottom: 10px;
      font-weight: 500;
    }
    
    .main-footer h2 {
      color: #ffffff;
      font-weight: 500;
    }
    
    .main-footer ul li a {
      color: #ffffffcc;
      text-decoration:none;

    }

     li a:hover {
        background: #303443;
        padding:5px;
        border-radius:4px;
        transition: .2s ease-out;
    }
    
    footer {
      background-color: cornflowerblue;
      border-top: 1px solid darkblue;
      font-size: 17px;
      padding: 15px 5px;
      color: #ffffff;
      text-align: center;
    }
    
    footer a {
      text-decoration: none;
      color: #ffffff;
    }

    .logoinfo {
        width: 190px;
    }
    
    .logoinfo p {
      color: cornflowerblue;
      font-size: 17px;
      margin-top: 5px;
    }
    
    .contact-details {
      margin-top: 20px;
    }
    
    .contact-details li {
      list-style: none;
      margin: 10px 0;
    }
    
    .contact-details li a {
      text-decoration:none;
      color: #f1f1f1;
    }
    
    .contact-details .fa {
      color: #f1f1f1;
      margin-right: 10px;
    }
    
    .sociallogos{
      padding:20px 0;
    }
    
    .sociallogos .logobox a{
      padding:0 10px;
      text-decoration:none;
      color:#ffffff;
      font-size:22px;
    }
    .com {
        width: 50px;
    }
    .com ul li{
      padding:5px 0;
    }
    
    @media only screen and (max-width: 749px) {
      .main-footer {
        padding:20px;
        display:grid;
        grid-template-columns: 1fr 1fr;
      }
        .info{
          padding:20px 0;
      }
    }
    
    @media (max-width: 480px) {
      .main-footer {
        grid-template-columns: 1fr;
      }
      .sociallogos{
        padding:20px 0;
      }
      .com{
        padding:20px 0;
      } 
    
    }
    
    
    </style>

<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


    
    <section id="footer">
  <div class="main-footer">
    <div class="logoinfo" data-aos="fade-up">
      <h2>Custom Footer</h2>
      <p>By Moch</p>

      <div class="contact-details">
        <h1>Contact Us</h1>
        <li>
          <div class="fa fa-phone"></div><a href="tel:+62 821 xxxx xxxx">+62 821 xxxx xxxx</a></li>
        <li>
          <div class="fa fa-envelope"></div><a href="mailto:moch_mona@proton.com">moch_mona@proton.com</a></li>
        </li>
    </div>
  </div>
  <div class="com " data-aos="fade-up">
    <h1>About</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div class="info" data-aos="fade-up">
    <h1>Social Media</h1>
    <div class="sociallogos">
      <div class="logobox">
        <a href="#" class=""><i class='bx bxl-codepen' style='color:#e8e3e3'  ></i></a>
        <a href="#" class=""><i class='bx bxl-github' style='color:#e8e3e3' ></i></a>
        <a href="#" class=""><i class='bx bxl-gitlab' style='color:#e8e3e3' ></i></a>
        <a href="#" class=""><i class='bx bxl-instagram' style='color:#e8e3e3' ></i></a>
        <a href="#" class="-"><i class='bx bxl-linkedin-square' style='color:#e8e3e3' ></i></a>
        <a href=""><i class='bx bx-envelope bx-sm' style='color:#ffffff' ></i></a>
        <a> <i class='bx bxl-whatsapp bx-sm' style='color:#08ea4f' ></i></a>
        
      </div>
    </div>
  </div>
  </div>
<footer>© @Mochmona Copyright 2020 All Rights Reserved</footer>
</section>
`;

  }
}
customElements.define("modify-footer", FooterModify);
