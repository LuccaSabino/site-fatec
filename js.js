function show() {

    var nav = document.getElementById('navbar')
    var fantasma = document.getElementById('menu-fantasma')
    var seta2 = document.getElementById('seta-menu2')


    if (nav.classList.contains('hide1')) {


        nav.classList.add('show')
        fantasma.classList.add('show')

        nav.classList.remove('hide1')

        seta2.classList.remove('hide')

    } else {

        nav.classList.remove('show')
        fantasma.classList.remove('show')

        nav.classList.add('hide1')

        seta2.classList.add('hide')

    }


}

function veja_mais() {
    var btn_mais1 = document.getElementById('btn-mais')
    var btn_mais2 = document.getElementById('btn-mais2')
    var conteudo2 = document.getElementById('conteudo2')


    btn_mais1.classList.add('hide')
    btn_mais2.classList.remove('hide')
    conteudo2.classList.remove('hide')
}

function veja_mais2() {
    var btn_mais2 = document.getElementById('btn-mais2')
    var btn_mais3 = document.getElementById('btn-mais3')
    var conteudo3 = document.getElementById('conteudo3')



    btn_mais2.classList.add('hide')
    btn_mais3.classList.remove('hide')
    conteudo3.classList.remove('hide')

}



// slideshow----------------------------


let count = 1
document.getElementById("radio1").checked = true

setInterval(function () {
    nextImage()
}, 4000)

function nextImage() {
    count++
    if (count > 5) {
        count = 1
    }

    document.getElementById("radio" + count).checked = true
}