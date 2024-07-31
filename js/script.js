const texto = document.getElementById("texto")
const no = document.getElementById("no")
const fundo = document.getElementById("fundo")

var contador = 0

no.addEventListener("mousemove",function(){
    contador++
    let x = Math.floor( Math.random() *100 )
    let y = Math.floor( Math.random() *100 )

no.style.bottom = y + "%"
no.style.right = x + "%"

if( contador == 15 ) {  
    texto.innerHTML = "pensa bem!"

}

if( contador == 30 ) {  
    texto.innerHTML = "se eu fosse você pensaria bem!"
    fundo.style.backgroundImage = 'url(https://acdn.mitiendanube.com/stores/001/134/310/products/revolver-taurus-rt410-cal36-165mm-inox-5tiros_1_12001-337276a94a8dcdfb2116185165375051-1024-1024.webp)'

  }

})

function casar() {
    no.innerHTML = claro

    setTimeout( function(){
        while( !confirm("confirma o casório?") ){}
        alert("😍vos declaro casados!!❤")
        window.close()
    },500 )
}

