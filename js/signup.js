function Sign(){

             var a = document.getElementById("user").value;
             var b = document.getElementById("email").value ;
             var c = document.getElementById("pass").value;
             
             if (a==""){
                  alert("User Name Is Required");
                  return false;
             }
            
             if (b==""){
                  alert("Email Is Required");
                  return false;
             }

             if (c==""){
                 alert("Password Is Required");
                 return false;

             }

             else{
                  alert("Your Registration Is Successfull Now MoveOn To LogIn");
             }






}
 