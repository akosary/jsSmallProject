let form = document.querySelector('.formToValid');
// console.log(form)



let nameInvalid = document.getElementById("nameValidation");
let lnameInvalid = document.getElementById("lastNameValidation");
let emailInvalid = document.getElementById("emailInvalid");
let emailPattern = document.getElementById("emailPattern");
let telInvalid = document.getElementById("telInvalid");
let telInvalidPattern = document.getElementById("telInvalidPattern");
const patEmail = new RegExp( /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z]{2,3}$/g);
const telPattern = new RegExp( /^01[0-2]{1}[0-9]{8}$/g);

let  fname,lname,email,tel;
function validation(event){
fname = form[0].elements[0];
lname = form[0].elements[1];
email = form[0].elements[2];
tel = form[0].elements[3];
if(fname.value == ""){
  event.preventDefault();
  nameInvalid.style.display="block";
}
  fname.addEventListener('keyup',function(){
    if(fname.value == ""){
      event.preventDefault();
      nameInvalid.style.display="block";
    }else{
      nameInvalid.style.display="none";
    }
  })


  if(lname.value == ""){
    event.preventDefault();
    lnameInvalid.style.display="block";
  }

  lname.addEventListener('keyup',function(){
    if(lname.value == ""){
      event.preventDefault();
      lnameInvalid.style.display="block";
    }else{
      lnameInvalid.style.display="none";
    }
  })

  if(email.value == ""){
    event.preventDefault();
    emailInvalid.style.display="block";
  }

  email.addEventListener('keyup',function(){
    if(email.value == ""){
      event.preventDefault();
      emailInvalid.style.display="block";
    }else{
      emailInvalid.style.display="none";
    }
  })

email.addEventListener('keydown',function(){
  if(!(email.value).match(patEmail)){
    event.preventDefault();
    emailPattern.style.display="block";
  }else{
    emailPattern.style.display="none";
  }
})

if(tel.value == ""){
  event.preventDefault();
  telInvalid.style.display="block";
}

tel.addEventListener('keyup',function(){
  if(tel.value == ""){
    event.preventDefault();
    telInvalid.style.display="block";
  }else{
    telInvalid.style.display="none";
  }
})

tel.addEventListener('keydown',function(){
  if(!(tel.value).match(telPattern)){
    event.preventDefault();
    telInvalidPattern.style.display="block";
  }else{
    telInvalidPattern.style.display="none";
  }
})

}

// console.log(fname)


















// let form = document.querySelector('.formToValid');
// // console.log(form);
// form.addEventListener('submit',function(event){
//   if(!form.checkValidity()){
//     event.preventDefault();
//     event.stopPropagation();
//   }
//   form.classList.add('was-validated')
// }, true)









// function aaa() {
//     'use strict'
//     var forms = document.querySelectorAll('.needs-validation')
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
//           form.classList.add('was-validated')
//         }, false)
//       })
//   }
  