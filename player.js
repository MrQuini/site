const idPlayers = localStorage.getItem('idPlayers')

const alls = document.querySelectorAll('.players')
alls.forEach(function (element) {
    if (element.id === idPlayers) {
        element.hidden = false
    }
    else {
        element.hidden = true
    }
})
