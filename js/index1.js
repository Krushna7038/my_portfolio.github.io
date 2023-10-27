function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var name_valid = /^[A-Za-z" "]+$/;
    var email_valid = /^[A-Za-z_0-9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var returnval = true;
    clearErrors();
 
                                                         //name validation
    var name = document.forms['myForm']["fname"].value;
    if(name.length<7){
        seterror("name", "**Please enter your full name");
        returnval = false;
    }
    else if(name.match(name_valid)){
        returnval;
    }
    else{
        seterror("name", "**Numbers and special symbols are not allowed.");
        returnval = false;
    }

                                                          //email validation
    var email = document.forms['myForm']["femail"].value;
    if(email.length>20){
        seterror("email", "**Length of email is too long.");
        returnval = false;
    }
    else if(email.match(email_valid)){
        returnval;
    }
    else{
        seterror("email", "**Email is not valid.Please enter valid email.")
    }

                                                           //subject validation
    var subject = document.forms['myForm']["fsubject"].value;
    if(subject.length<20){
        seterror("subject", "**Subject should be atleast 20 character.");
        returnval = false;
    }
    else if(subject.match(name_valid)){
        returnval;
    }
    else{
        seterror("subject", "**Numbers and special symbols are not allowed.");
        returnval = false;
    }


    var mess = document.forms['myForm']["fmess"].value;
    if(mess.length<100){
        seterror("mess", "**Please enter atleast 100 character valid message.");
        returnval = false;
    }
    return returnval;

}
/*
function myFunction(){
    setTimeout(()=>{
        alert("Thank you for messing me.")
    },1000)
}*/