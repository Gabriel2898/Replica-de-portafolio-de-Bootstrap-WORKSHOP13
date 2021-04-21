const $barra = document.getElementById("barra")


window.addEventListener("scroll", ()=> 
{
   
   const $posicion = Math.floor(window.scrollY)

    if ($posicion > 170) 
    {
        $barra.style.padding = "13px 0"
    }
    else
    {
        $barra.style.padding = "27px 0"
    }

})


const $year = document.getElementById("year")

let a = new Date()
let guardar = a.getFullYear()

$year.textContent = guardar



