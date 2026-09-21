var pacs = document.getElementById('pacs');
var pac = document.getElementById('pac');  

const widthBody = parseFloat((window.getComputedStyle(document.body)).width)
const widthPacs = parseFloat(window.getComputedStyle(pac).width)

if (widthPacs == 0) {
    location.reload();
}

var numberPacs = Math.ceil(widthBody / widthPacs)
const styleSheet = document.styleSheets[0]; 

document.documentElement.style.setProperty('--width_pac', `-${widthPacs}px`)

if (widthPacs == 0) {
    numberPacs = 3
    location.reload()
}

for (let i = 0; numberPacs > i; i++) {
    var copPac = pac.cloneNode(true);
    pacs.insertAdjacentElement('beforeend', copPac);
}

const cardList = document.querySelectorAll('.card_list')
cardList.forEach(function (element){
    element.addEventListener('click', function(event){
        const namePlayer = event.target.id
        localStorage.setItem('idPlayers', namePlayer)
    })
})

