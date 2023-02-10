function start_loading(button){document.querySelector(button).disabled=true
document.querySelector(button).innerHTML=''
content=document.createElement('div')
content.innerHTML='<div class="spinner-border spinner-border-sm" role="status"></div>'
document.querySelector(button).appendChild(content)}
function end_loading(button,text){document.querySelector(button).innerHTML=''
document.querySelector(button).innerHTML=text
document.querySelector(button).disabled=false}