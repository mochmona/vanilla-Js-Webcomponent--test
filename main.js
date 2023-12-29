// path tanpa framework sertakan jenis extensi file nya
import { FooterCustom } from "./CustomDefaultComponent/FooterCustom.js";
import { Layout } from "./pages/MainLayout.js";


const root = document.getElementById('root');
console.log( root,'connected')

const layout = new Layout;
document.body.appendChild(layout)
console.log(layout,"isconnect")

const x = document.querySelector('.footer');
console.log(x, "footer connect")

const newFooter = new FooterCustom;
// document.body.insertAdjacentElement("afterbegin",newFooter)
document.body.appendChild(newFooter)
console.log(newFooter,'connected')


let newObjNode = new Object;
newObjNode = new FooterCustom
newObjNode.setAttribute('class','object-node')
document.body.appendChild(newObjNode)
console.log(newObjNode,"connected")

x.append(newObjNode)
root.append()

/* refactor kode berikut kenapa fungsi listener tidak berjalan, tetapi ketika di hapu salah satu elemennya fungsi berjalan normal */