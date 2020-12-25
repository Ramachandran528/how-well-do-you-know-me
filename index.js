var readlineSync=require("readline-sync");

var score=0;
var username=readlineSync.question("Enter your name");

// greeting message
console.log("Welcome ",username," Do you know Rama");

var questions=[
  {
    question:"Where do i live?",
    answer:"Tirunelveli"
  },
  {
    question:"What is my favourite color?",
    answer:"orange",
  },
  {
    question:"In Which college i am studying?",
    answer:"st.Xaviers"
  },
  {
    question:"Who is my favourite hero?",
    answer:"Ajith Kumar"
  }
]

var score=0,user_answer;

function play(question,answer)
{
    user_answer=readlineSync.question(question);
    if(user_answer.toLowerCase()==answer.toLowerCase())
    {
      console.log("Correct!");
      score+=1;
    }
    else
    console.log("Wrong!");
    console.log("--------------------------");
    console.log("Your Current Score:"+score);
}

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
}