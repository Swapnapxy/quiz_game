function addUser(){
    p1=document.getElementById("person_1").value;
    p2=document.getElementById("person_2").value;
    pe1=document.getElementById("email1").value;
    pe2=document.getElementById("email2").value;
    pp1=document.getElementById("password1").value;
    pp2=document.getElementById("password2").value;
    
    localStorage.setItem("player1",p1);
    localStorage.setItem("password1",pp1);
    localStorage.setItem("email1",pe1);
   
    localStorage.setItem("player2",p2);
    localStorage.setItem("password2",pp2);
    localStorage.setItem("email2",pe2);
    
    window.location="page.html";
}