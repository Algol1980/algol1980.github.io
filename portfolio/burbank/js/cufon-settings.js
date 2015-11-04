function initCufon() {
    Cufon.replace('h1 span', {
        color: '-linear-gradient(#eb6900, #ffb65e)',
        fontfamily: 'Agenda-Bold'
    });
}

$(document).ready(function () {
    initCufon();
});