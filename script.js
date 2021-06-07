function startQuiz(){
  var score = 0
  var answer = prompt("What is the 4 bit binary equivalent of 8?")
  if(answer=="1000"){
    alert("correct")
    score = score + 1
  }else{
    alert("Wrong it was 1000")
  }
}