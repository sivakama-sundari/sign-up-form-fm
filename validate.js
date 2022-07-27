document.getElementById("myForm").addEventListener('submit', e => {
    e.preventDefault();

    validate();
});

function validate(){

 
    var valid=0;
    var first=document.getElementById("firstName").value;
    var last=document.getElementById("lastName").value;
    var mail=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(first==""){
        document.getElementById("fn").innerHTML="First Name cannot be empty";
        document.getElementById("fn").style.color="hsl(0, 100%, 74%)";
        document.getElementById("fn").style.display="block";
        document.getElementById("fn").style.float="right";
        document.getElementById("firstName").style.background="url('circle-exclamation-solid.svg') no-repeat scroll";
        document.getElementById("firstName").style.backgroundSize="7%";
        document.getElementById("firstName").style.backgroundPosition="95%";
      
        
    }
    else{
        document.getElementById("fn").style.display="none";
        document.getElementById("firstName").style.background="none";
        valid+=1;
    }
    if(last==""){
        document.getElementById("ln").innerHTML="Last Name cannot be empty ";
        document.getElementById("ln").style.color="hsl(0, 100%, 74%)";
        document.getElementById("ln").style.display="block";
        document.getElementById("ln").style.float="right";
        document.getElementById("lastName").style.background="url('circle-exclamation-solid.svg') no-repeat scroll";
        document.getElementById("lastName").style.backgroundSize="7%";
        document.getElementById("lastName").style.backgroundPosition="95%";
        
       
    }
    else{
        document.getElementById("ln").style.display="none";
        document.getElementById("lastName").style.background="none";
        valid+=1;
    }
    if((mail.indexOf("@")>-1 && mail.indexOf(".com")>-1)|| mail.indexOf("@")>-1 && mail.indexOf(".in")>-1)
    {
        document.getElementById("em").style.display="none";
        document.getElementById("email").style.color="black";
        document.getElementById("email").style.background="none";
        valid+=1;
    }
     else
    {
        document.getElementById("em").innerHTML="Looks like this is not an email";
        document.getElementById("email").style.color="hsl(0, 100%, 74%)";
        document.getElementById("em").style.color="hsl(0, 100%, 74%)";
        document.getElementById("em").style.display="block";
        document.getElementById("em").style.float="right";
        document.getElementById("email").style.background="url('circle-exclamation-solid.svg') no-repeat scroll";
        document.getElementById("email").style.backgroundSize="7%";
        document.getElementById("email").style.backgroundPosition="95%";
      
    }
    if(pass==""){
        document.getElementById("pw").innerHTML="Password cannot be empty";
        document.getElementById("pw").style.color="hsl(0, 100%, 74%)";
        document.getElementById("pw").style.display="block";
        document.getElementById("pw").style.float="right";
        document.getElementById("password").style.background="url('circle-exclamation-solid.svg') no-repeat scroll";
        document.getElementById("password").style.backgroundSize="7%";
        document.getElementById("password").style.backgroundPosition="95%";
     
    }
    else{
        document.getElementById("pw").style.display="none";
        document.getElementById("password").style.background="none";
        valid+=1;
    }
   

    

    if(valid==4){
        valid=0;
        document.getElementById("myForm").reset();
        
        

    }
    
   
}