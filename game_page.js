var player1Name=localStorage.getItem("player1_name");
var player2Name=localStorage.getItem("player2_name");
document.getElementById("hard").style.visibility = "hidden";
document.getElementById("player1_name").innerHTML="&nbsp;"+player1Name+" score:"+"&nbsp;";
document.getElementById("player2_name").innerHTML="&nbsp;"+player2Name+" score:"+"&nbsp;";
var player1_score=0;
var player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn = "+player1Name;
document.getElementById("player_answer").innerHTML="Answer turn = "+player2Name;
var ans_turn="player2";
var que_turn="player1";
function send(){
    if(document.getElementById("Num_1").value <= 12){
        if(document.getElementById("Num_2").value <= 12){
            Num_1=document.getElementById("Num_1").value;
            Num_2=document.getElementById("Num_2").value;
            Ans=Num_1*Num_2;
            console.log(Num_1);
            console.log(Num_2);
            console.log(Ans);
            var html_word="<h3>Q."+Num_1+' '+'X'+' '+Num_2+"</h3>";
            var html_input="<br><input id='given_input' placeholder='The answer is...'>";
            var html_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
            document.getElementById("output").innerHTML=html_word+html_input+html_button;
            document.getElementById("Num_1").value="";
            document.getElementById("Num_2").value="";
            document.getElementById("hard").style.visibility = "hidden";
        }
        else{
            var x = document.getElementById('hard');
            x.style.visibility = 'visible';
        }
    }
    else{
        var x = document.getElementById('hard');
        x.style.visibility = 'visible';
    }
}
function check(){
    var player_answer=document.getElementById("given_input").value;
    if(player_answer==Ans){
        if(ans_turn=="player2"){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        else{
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
    }
    else{
        if(ans_turn=="player2"){
            player2_score=player2_score-1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        else{
            player1_score=player1_score-1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
    }
    if(ans_turn=="player2"){
        ans_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn = "+player1Name;
    }
    else{
        ans_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn = "+player2Name;
    }
    if(que_turn=="player2"){
        que_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn = "+player1Name;
    }
    else{
        que_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn = "+player2Name;
    }
    document.getElementById("output").innerHTML="";
}