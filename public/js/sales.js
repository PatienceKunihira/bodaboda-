function sales_validation(){
  var firstName = document.sale.fname;
  var surName = document.sale.surname; 
  var Pconact = document.sale.phonecontact;
  var passid = document.sale.IDs;
  var eMail = document.sale.email;
  var passWord = document.sale.password;
  var workingDays = document.sale.workingdays;
  var superVisor = document.sale.supervisors;

  // event.preventDefault()

   if(fornames(firstName)){}
    if(surnames(surName)){}
    if(fornumbers(Pconact)){}
    if(id_validation(passid,5,35)){}
    if(ValidateEmail(eMail)){}
    if(forpassword(passWord)){}
    if(allnumeric(workingDays)){}
    if(fornames(superVisor)){}
      
  return false;
}
var fornames=(fname)=>{
  var letters =  /^[A-Za-z]+$/;
  if(fname.value.match(letters)){
      return true;
  }
  else{
      
      fname.style.border = "2px solid red"
      alert('Please input your name')
      fname.addEventListener("click", ()=>{fname.style.border=""})
      
      return false;
  }   
}

var surnames=(surname)=>{
  var letters =  /^[A-Za-z]+$/;
  if(surname.value.match(letters)){
      return true;
  }
  else{
      
      surname.style.border = "2px solid red"
      alert('Please input your surname')
      surname.addEventListener("click", ()=>{surname.style.border=""})
      
      return false;
  }   
}
var fornumbers=(phonecontact)=>{
   var numbers = /^\d{10}$/;
   if(phonecontact.value.match(numbers)){
     return true;
   }
   else{
     phonecontact.style.border = "2px solid red"
     alert('Please input your phone number')
     phonecontact.addEventListener("click", ()=>{phonecontact.style.border=""})

     return false;
   }
}


// var fordefault = (currentdate)=>{
//   if(currentdate.value == "Default"){
//     return true;
//   }
//   else{
//     currentdate.style.border = "2px solid red"
//     currentdate.addEventListener("click",()=>{currentdate.style.border=""} )

//     return false;
//   }
// }

function id_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
  passid.style.border = "2px solid red" 
alert("ID should not be empty / length should be between "+mx+" to "+my);

passid.focus();
return true;
}
return false;
}

var  ValidateEmail =(email)=>{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
email.style.border = "2px solid red" 
alert("You have entered an invalid email address!");
email.focus();
return false;
}
} 

var forpassword = (password) =>{
  if(password.value.length>0){
      return true;
  }
  else{
    password.style.border = "2px solid red"
     alert("Please input your password")
      password.addEventListener("click", ()=>{password.style.border="",uname.classList.add("border-dark")});
    
      return false;
  }
}

var allnumeric=(workingdays)=>{
  var numbers = /^[0-9]+$/;
  if(workingdays.value.length>0 && digs.value.match(numbers)){
      return true;
  }
  else{
     
      workingdays.style.border = "2px solid red"
      alert('Please input the number of working days')
      workingdays.addEventListener("click", ()=>{workingdays.style.border="",workingdays.classList.add("border-dark")})
      return false;
  }
}