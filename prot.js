let contact1 = document.querySelectorAll('.contact')[0]
let contact2 = document.querySelectorAll('.contact')[1]
let id_contact = document.getElementById('contact')
let x = document.querySelector('.x')

contact1.addEventListener('click',()=>{
    id_contact.style.display='flex'
})

contact2.addEventListener('click',()=>{
    id_contact.style.display='flex'
})

x.addEventListener('click',()=>{
    id_contact.style.display='none'
})

let hedden =document.getElementById('hedden')
let z = hedden
let lines = document.getElementsByClassName('lines')[0]
let menu = document.getElementsByClassName('menu')[0]

hedden.addEventListener('click',function(){
  lines.style.marginTop = '30px'  
})

let line = document.querySelector('.line')

hedden.addEventListener('click',function(){
    menu.style.visibility= 'visible';
    for(i=0;i<3;i++){
    let line = document.querySelectorAll('.line')[i]
    line.style.animationName = 'lines'  
    line.style.animationDelay = '0s';
    line.style.animationDuration = '0.6s'
    line.style.animationFillMode= 'forwards';
    line.style.animationTimingFunction= 'ease-in-out';
    line.style.zIndex= '40';
    line.style.position= 'relative';
    }
  })

  

  document.getElementsByClassName('content')[0].addEventListener('click',()=>{
    if(menu.style.visibility== 'visible'){
    menu.style.visibility= 'hidden';
    document.querySelectorAll('.line')[0].style.position= 'absolute';
    document.querySelectorAll('.line')[1].style.position= 'absolute';
    document.querySelectorAll('.line')[2].style.position= 'absolute';
    document.querySelectorAll('.line')[0].style.display = 'none'
    document.querySelectorAll('.line')[1].style.display = 'none'
    document.querySelectorAll('.line')[2].style.display = 'none'
    document.querySelector('#lines').style.width = '0px'
    }
  })
