function startQuiz(){
  var score = 0;
  var answer = prompt("What is the 4 bit binary equivalent of 8?");
  if(answer=="1000"){
    alert("correct");
    score = score + 1;
  }else{
    alert("Wrong it was 1000");
  }
}


function chooseTask() {
  var tasks = [
    "Ask again later."
"Concentrate and ask again.""
"Don’t count on it.""
"Most likely.""
"My sources say no.""
"Outlook not so good.""
"Outlook good.""
"Reply hazy, try again.""
Very doubtful.
Yes – definitely.
  ];
  //document.getElementById("msg").innerHTML = tasks[0];
  document.getElementById("msg").innerHTML = ""; //blank out box
  for (var i = 0; i < 6; i++) {
    document.getElementById("msg").innerHTML =
      document.getElementById("msg").innerHTML + "<br>" + tasks[i];
  }

  var rand = Math.random() * tasks.length;
  rand = Math.floor(rand);
  document.getElementById("msg2").innerHTML = tasks[rand];
}