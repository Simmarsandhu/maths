player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;


document.getElementById("player_name1").innerHTML = player1 + ":";
document.getElementById("player_name2").innerHTML = player2 + ":";

document.getElementById("score_1").innerHTML = player1_score;
document.getElementById("score_2").innerHTML = player2_score;

document.getElementById("player_turn_question").innerHTML = "question turn - " + player1;
document.getElementById("player_turn_answer").innerHTML = "answer turn - " + player2;
 

 
 
 
 function send(){
     number1=document.getElementById("number1").value;
     number2=document.getElementById("number2").value;

     actual_answer=parseInt(number1)*parseInt(number2);

     question_number="<h4>"+number1+"X"+number2+"</h4>";
     check_button="<br><Br><button class='btn btn-info' onclick='check()'>Check</button>";
     input_box="<br>Answer : <input type='text' id='input_check_box'>";
     row= question_number+ input_box+check_button;
      
     
     document.getElementById("output").innerHTML= row;

     document.getElementById("number1").value="";
     document.getElementById("number2").value="";

 }





  var question_turn = "player1";
  var answer_turn ="player2";

 function check(){
     
     get_answer=document.getElementById("input_check_box").value;
     
     console.log(get_answer);

     if(get_answer == actual_answer){

        if(answer_turn =="player1"){
            update_player1_score = player1_score + 1;
            document.getElementById("score_1").innerHTML=update_player1_score;
            console.log(update_player1_score);
            


            
            

        }
        else{
            update_player2_score = player2_score + 1;
            document.getElementById("score_2").innerHTML= update_player2_score;
            console.log(update_player2_score);
            

            

        }
     }
     if(question_turn =="player1"){
     question_turn ="player2";

     document.getElementById("player_turn_question").innerHTML="Question Turn - " + player2;
     
    
    }
    else{
        question_turn ="player1"
        document.getElementById("player_turn_question").innerHTML="Question Turn - " +  player1;
        
        
 
    }
    if(answer_turn =="player1"){
        answer_turn ="player2";
   
        document.getElementById("player_turn_answer").innerHTML="Answer Turn - " + player2;
        
       
       }
       else{
           answer_turn ="player1"
           document.getElementById("player_turn_answer").innerHTML="Answer Turn - " +  player1;
           
           
        }
       }
    
   

