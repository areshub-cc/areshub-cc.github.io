var burgerMenu=document.querySelector('#burgerMenu')
var mobileMenuItems=document.querySelector('#mobileMenuItems')
var closeIcon=document.querySelector('#closeIcon')
menuOpenned=false
burgerMenu.addEventListener('click',function(){if(menuOpenned){document.body.style.overflow='auto'
mobileMenuItems.classList.remove('nav-openned')
menuOpenned=false}else{document.body.style.overflow='hidden'
mobileMenuItems.classList.add('nav-openned')
menuOpenned=true}})
closeIcon.addEventListener('click',function(){document.body.style.overflow='auto'
mobileMenuItems.classList.remove('nav-openned')
menuOpenned=false})