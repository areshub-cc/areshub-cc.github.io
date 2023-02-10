var basicButton=document.querySelector('.a_button_primary')
document.body.addEventListener('keyup',function(e){console.log('basicButton')
if(e.keyCode===13){basicButton.click();}})