$ (function () {

     $(".imgs .left-images").fadeTo(4000,0.7);
     $(".imgs .right-images").fadeTo(4000,0.7);
     $("header").fadeTo(4000,0.8);
     
      




});

function  important(){

          var user =document.getElementById("fname").value;
          var lname =document.getElementById("lname").value;
          var email=document.getElementById("email").value;
          var message =document.getElementById("message").value;


          if(user==""){
                document.getElementById("mname").innerHTML="First Name Is Required";
                return false;
          }

          if(lname==""){
                document.getElementById("mlname").innerHTML="Last Name Is Required";
                return false;
          }

          if(email==""){
                document.getElementById("memail").innerHTML="Email Is Required";
                return false;
          }

          if(message==""){
                document.getElementById("msg").innerHTML="Message is Required";
                return false;

          }

          else{
                document.write("<h1>Congratulation Your Submission Is Completed</h1>");
               
          }



          
   }

  

