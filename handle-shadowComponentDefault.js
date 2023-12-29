import { FooterCustom } from "./CustomDefaultComponent/FooterCustom.js";


const root = document.getElementById('root')
console.log(root,"connected");

/* create Node element just for testing */
const heading = document.createElement('h3');
heading.textContent = "Test Vanilla Component connected"
heading.setAttribute("class","heading")
heading.style.backgroundColor = "yellow"
document.body.insertAdjacentElement("afterbegin",heading)
console.log(heading,'connected')

/* methohde create element node */
const footerNode = document.createElement('custom-footer');
footerNode.setAttribute('class','nodeElement')
console.log(footerNode,'node element')

/* methode create new Obj node jangan pakai const, ganti let */
let footerObjNode = new Object;
footerObjNode = new FooterCustom
footerObjNode.setAttribute('class','nodeObject-Element')
document.body.append(footerObjNode)
console.log(footerObjNode,'obj node')

// Comment : metode dibawah lebih umum penambahan setAttribute hanya untuk meudahkan cek node el terhubung/gunakan classlist untuk cek element

/* methode 1 invoke to body directly | langsung masukin ke body*/
const myFooter = document.body.insertAdjacentElement("afterbegin",new FooterCustom());
myFooter.classList.add("footerElement-1")
console.log(myFooter,"connected")


/* methode 2 invoke to body | buat elemen baru masukin ke body*/
const newFooter = document.createElement('custom-footer');
document.body.append(newFooter)
newFooter.setAttribute("class","footerElement-2")
console.log(newFooter,"connected")


/* methode 3 invoke to body | buat new Obj baru masukin ke body*/
const childnewFooter = new FooterCustom();
document.body.insertAdjacentElement("afterbegin",childnewFooter) // posisi dibawah body line pertama doc body
// document.body.insertAdjacentElement("beforeend",childnewFooter) // posisi paling bawah doc body
// document.body.appendChild(childnewFooter); //posisi elemen berada dipaling bawah , inspect
childnewFooter.setAttribute("class","footerElement-3")
console.log(childnewFooter,"connected")

/* div id=root */
root.append(myFooter,newFooter,childnewFooter);




/* append multiple child inheritance its opposite with appendChild only one child */
/* not working on my linux-mint vscode i've no idea what exactly happen , export import not render element vanilla but on window it running well*/





