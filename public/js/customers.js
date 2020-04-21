function cust_validation(){
    var firstName = document.customer.firstname;
    var surName = document.customer.surname;
    var oName = document.customer.othername;
    var pContact = document.customer.phonecontact;
    var nationalitY = document.customer.nationality;
    var Nin = document.customer.nin;
    var Rfname = document.customer.refree_fname;
    var Rsname = document.customer.refree_sname;
    var Roname = document.customer.refree_oname;
    var Rpcontact = document.customer.refree_number;

     //event.preventDefault()
    
        if(fornames(firstName)){
            if(forsname(surName)){
                if(allletter(oName)){
                    if(allnumeric(pContact)){
                         if(allletters(nationalitY)){
                            if(foralphanum(Nin)){
                                if(fornames(Rfname)){
                                    if(forsname(Rsname)){
                                        if(allletter(Roname)){
                                            if(allnumeric(Rpcontact)){
                                            }
                                        }
                                    }                
                                }
                            }
                         }                            
                    }
                }                
            }                    
        }
        form.submit()
      
    return false;
}
var fornames=(firstname)=>{
    var letters =  /^[A-Za-z]+$/;
    if(firstname.value.match(letters)){
        return true;
    }
    else{
        alert('Please input your name')
        firstname.style.border = "2px solid red"
        firstname.addEventListener("click", ()=>{firstname.style.border=""})
        
        return false;
    }   
  }

  var forsname=(surname)=>{
    var letters =  /^[A-Za-z]+$/;
    if(surname.value.match(letters)){
        return true;
    }
    else{
        
        alert('Please input your surname')
        surname.style.border = "2px solid red"
        surname.addEventListener("click", ()=>{surname.style.border=""})
        
        return false;
    }   
  }
  var allletter=(othername)=>{
    var letters =  /^[A-Za-z]+$/;
    if(othername.value.match(letters)){
        return true;
    }
    else{
        
        alert('Please input the othername')
        othername.style.border = "2px solid red"
        othername.addEventListener("click", ()=>{othername.style.border=""})
        
        return false;
    }   
  }
  var allnumeric=(phonecontact)=>{
    var numbers = /^\d{10}$/;
    if(phonecontact.value.match(numbers)){
      return true;
    }
    else{
      
      alert('Please input the phonecontact')
      phonecontact.style.border = "2px solid red"
      phonecontact.addEventListener("click", ()=>{phonecontact.style.border=""})
 
      return false;
    }
 }
 
 var allletters=(nationality)=>{
    var letters =  /^[A-Za-z]+$/;
    if(nationality.value.match(letters)){
        return true;
    }
    else{
        
        alert('Please input your nationality')
        nationality.style.border = "2px solid red"
        nationality.addEventListener("click", ()=>{nationality.style.border=""})
        
        return false;
    }   
  }

  var foralphanum=(nin)=>{
        var letters = /^[0-9a-zA-Z]+$/;
        if(nin.value.match(letters)){
            return true;
        }
        else{
            
            alert('Input your national id number')
            nin.style.border = "2px solid red"
            nin.addEventListener("click", ()=>{nin.style.border=""})
          
            return false;
        }
    }

