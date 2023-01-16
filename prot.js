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