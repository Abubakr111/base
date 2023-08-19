const emailInput = document.querySelector('.input');
const submitBtn = document.querySelector('#arrow');

function validateEmail(email) {
 ~   let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


submitBtn.addEventListener('click',()=>{
    if(!validateEmail(emailInput.value)){ 
        alert('wrong format') 
        //   return false
       } else{
        alert('good')
       }

    })