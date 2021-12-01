const target = document.querySelectorAll("[data-animation]")
const txt = document.querySelector(".home>p")

const header = document.querySelector(".header")

const btn = document.getElementById("menuMobile")
const navMenu = document.getElementById("navMenu")

const close = document.getElementById("close")

const animation = "animation"

function mudaCor(){
    const winTop = window.pageYOffset
    if( winTop > 20){
        header.style.backgroundColor = "#7914FF"
        header.style.boxShadow = "2px 2px 10px 2px rgba(78, 78, 78, 0.315)"
    }
    else if(winTop<50){
        header.style.backgroundColor = "#7a14ff00"
        header.style.boxShadow = "2px 2px 10px 2px rgba(78, 78, 78, 0)"
    }
}

window.addEventListener("scroll",mudaCor)

function menuMb(){
    const btn = document.getElementById("menuMobile")
    const navMenu = document.getElementById("navMenu")
    btn.style.display="none"
    navMenu.style.display="block"
}
function fechar(){
    const btn = document.getElementById("menuMobile")
    const navMenu = document.getElementById("navMenu")

    navMenu.style.display="none"
    btn.style.display="block"
}
btn.addEventListener("click",menuMb)
close.addEventListener("click",fechar)
//Writing h1 in home
function writer(element){
    const txtArray = element.innerHTML.split('')
    element.innerHTML = ""
    txtArray.forEach((letra, i)=>{
        setTimeout(()=> element.innerHTML += letra, 70*i)
    })
}

//animation in scroll
function animate(){
    const winTop = window.pageYOffset + ((window.innerHeight*3)/4)

    target.forEach((element)=>{
        if((winTop) > element.offsetTop){
            element.classList.add(animation)
        }
        else{
            element.classList.remove(animation)
        }
    })
}
if(target.length){
    window.addEventListener("scroll",()=>{
        animate()
    })
}
writer(txt)
