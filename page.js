pn1=localStorage.getItem("player1");
pn2=localStorage.getItem("player2");

ply1_score= 0 ;
ply2_score= 0 ;

document.getElementById("ply1_name").innerHTML=pn1 + " : ";
document.getElementById("ply2_name").innerHTML=pn2 + " : ";

document.getElementById("ply1_score").innerHTML=ply1_score;
document.getElementById("ply2_score").innerHTML=ply2_score;

document.getElementById("ply1_que").innerHTML="Question Turn -"+pn1;
document.getElementById("ply1_ans").innerHTML="Answer Turn -"+pn2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    number3=document.getElementById("number3").value;
    actual_answer = parseInt(number1)*parseInt(number2)+parseInt(number3);
    console.log(actual_answer);
    
    question_number="<h4>" + number1 +"X"+number2+"+"+number3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    document.getElementById("number3").value="";
    
    
}
 qus_turn="player1";
ans_turn="player2";

function check(){
    
    get_answer=document.getElementById("input").value;
    if(get_answer==actual_answer)
        {
            if(ans_turn=="player1"){
                ply1_score=ply1_score+1;
                document.getElementById("ply1_score").innerHTML=ply1_score;
            }
            else{
                ply2_score=ply2_score+1;
                document.getElementById("ply2_score").innerHTML=ply2_score;
            }
            
        }
    if(get_answer!=actual_answer)
        {
            if(ans_turn=="player1"){
                ply1_score=ply1_score-1;
                document.getElementById("ply1_score").innerHTML=ply1_score;
            }
            else{
                ply2_score=ply2_score-1;
                document.getElementById("ply2_score").innerHTML=ply2_score;
            }
            
        }
    if(qus_turn=="player1"){
        qus_turn="player2";
        document.getElementById("ply1_que").innerHTML="Question Turn -"+pn2;
    }
    else{
        qus_turn="player1";
        document.getElementById("ply1_que").innerHTML="Question Turn -"+pn1;
    }
    if(ans_turn=="player1"){
        ans_turn="player2";
        document.getElementById("ply1_ans").innerHTML="Answer Turn -"+pn2;
    }
    else{
        ans_turn="player1";
        document.getElementById("ply1_ans").innerHTML="Answer Turn -"+pn1;
     }
    
    if(ply1_score==3){
       ply1_score="Winner";
    document.getElementById("game").innerHTML=pn1+""+"is"+""+ply1_score;
    }
    if(ply2_score==3){
       ply2_score="Winner";
    document.getElementById("game").innerHTML=pn2+""+"is"+""+ply2_score;
    }
    
    
    document.getElementById("output").innerHTML="";
}