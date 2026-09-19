var pacs = document.getElementById('pacs');
var pac = document.getElementById('pac');  

const widthBody = parseFloat((window.getComputedStyle(document.body)).width)
const widthPacs = parseFloat(window.getComputedStyle(pac).width)

var numberPacs = Math.ceil(widthBody / widthPacs)
const styleSheet = document.styleSheets[0]; 

document.documentElement.style.setProperty('--width_pac', `-${widthPacs}px`)

if (numberPacs == Infinity) {
    numberPacs = 3
}
console.log(numberPacs)
for (let i = 0; numberPacs > i; i++) {
    var copPac = pac.cloneNode(true);
    pacs.insertAdjacentElement('beforeend', copPac);
}