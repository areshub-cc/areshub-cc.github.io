var theme_icon=document.querySelector('#theme_icon')
theme_icon.addEventListener('click',()=>{if(localStorage.getItem('theme')==='dark'){localStorage.setItem('theme','light')}else{localStorage.setItem('theme','dark')}
setDarkTheme()})