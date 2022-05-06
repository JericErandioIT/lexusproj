/* check if user does not exist */
function checkUserName() {
    let name = document.forms["myForm"]["name"].value;
    if (name == "john" || name == "mary" || name == "steve" || name == "") {
        //user found
    }
    else{
        alert("Username Does Not Exist.");
    }
}

/* check if password is match the username */
function checkPassword() {
    let name = document.forms["myForm"]["name"].value;
    let pass = document.forms["myForm"]["pass"].value;

    if(name == ""&& pass == ""){
        alert("Please Enter Your Username and Password.")
    }
    if(name == "john" && pass == "smith" 
        || name == "mary" && pass == "woods" 
        || name == "steve" && pass == "jobs" || pass == ""){
        //credentials corrects        
    }
    else{
        alert("Incorrect Password.");
    }
}

/* check number of login attempts */
var attempts = 3;

function no_of_Attempts(){
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    if(name == "john" && pass == "smith" 
        || name == "mary" && pass == "woods" 
        || name == "steve" && pass == "jobs"){
        alert("SuccessFully Logged In!");        
    }
    
    else{
        attempts = attempts-1;
        alert("Login Failed. You Have "+attempts+" Login Attempts Available.");  
        
        if(attempts == 0){
            alert("Logging In Temporarily Disabled.");
            document.getElementById("btn").disabled=true;            
        }
    }
    return false;
}




