let menu = document.getElementById('menu')
let header = document.querySelector('.menu-header')
let cancel = document.getElementById('cancel')

menu.addEventListener('click' , ()=> {
    header.classList.add('active')
})
cancel.addEventListener('click', () =>{
    header.classList.remove('active')
})

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
  }

  function fadeOut(){
    setInterval(loader, 1000)
  }
  window.onload = fadeOut
