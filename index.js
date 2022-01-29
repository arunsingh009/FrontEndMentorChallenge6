function validate(){
    var content = document.getElementById("emailId");
    var eror= document.getElementById("eror");
    var btn= document.getElementById("btn");
    var er1 = document.getElementById("e1");
    var er2 = document.getElementById("e2");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(content.value.trim()==""){
        eror.style.display="block";
        btn.style.left="-114px";
        content.style.border="3px solid hsl(0, 93%, 68%)";
        er2.innerHTML="Email can't be empty";
        setTimeout(() => {
            eror.style.display="none";
            btn.style.left="-92px";
            content.style.border="3px solid hsl(0, 6%, 24%)";
            er2.innerHTML="";      
        }, 2000);
        return false;   
    }else{
        if(content.value.match(mailformat)){
            alert("Email is valid");
            return true;
        }else{
            eror.style.display="block";
            btn.style.left="-114px";
            content.style.border="3px solid hsl(0, 93%, 68%)";
            er1.innerHTML="Enter valid email Address";
            setTimeout(() => {
            eror.style.display="none";
            btn.style.left="-92px";
            content.style.border="3px solid hsl(0, 6%, 24%)";
            content.value="";
            er1.innerHTML="";      
        }, 2000);
            return false;
        }
    }
}



{/*  */}