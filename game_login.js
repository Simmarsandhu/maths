function addUser(){
    player1_name=document.getElementById("pl1").value;

     localStorage.setItem("player1",player1_name);
     player2_name=document.getElementById("pl2").value;
     localStorage.setItem("player2",player2_name);

     window.location="game.html";

}