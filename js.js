function show(){

    var nav = document.getElementById('navbar')
    var fantasma = document.getElementById('menu-fantasma')

    if(nav.classList.contains('hide1')){


        nav.classList.add('show')
        fantasma.classList.add('show')

        nav.classList.remove('hide1')

    }else{

        nav.classList.remove('show')
        fantasma.classList.remove('show')

        nav.classList.add('hide1')

    }

    
}

function mais(){
    var ponto = document.getElementById('ponto')
    var ponto2 = document.getElementById('ponto2')
    var mais = document.getElementById('mais')
    


    ponto.classList.add('hide')
    ponto2.classList.remove('hide')
    mais.classList.add('show')
}