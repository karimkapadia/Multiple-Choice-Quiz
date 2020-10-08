var questions=[{ que :"Javascript is used for what purpose?",
                ans_opt : ["For client side scripting", "Server Side scripting" , "For protection of page source & images", "To read & write to files on clint side."],
                corr_ans :"0"
              },
              {

    
                que :"Which built-in method returns the characters in a string beginning at the specified location?",
                ans_opt : ["getSubstring()", "slice()" , "substr()", "None of the above."],
                corr_ans: "2"
              },
              {
                que : "Which of the following function of Number object returns a string value version of the current number?",
                ans_opt : ["toFixed()", "toString()" , "toLocaleString()", "None of the above."],
                corr_ans: "1"

              },

              {
                que : "Which of the following function of Array object removes the last element from an array and returns that element?",
                ans_opt : ["push()", "join()" , "map()", " pop()"],
                corr_ans: "3"

              },

              {
                que : "How can you detect client's browser name?",
                ans_opt : ["document.appName", "navigator.appName" , "document.Name", "None of the above."],
                corr_ans: "1"

              },

              ]

  var timer, curr_ques =0, ans,score=0;

 function loadGame()
  {
    if(localStorage.highscore)
    {
      
      document.querySelector("#topScore").textContent = localStorage.highscore;
      
    }
     // console.log("load game is called");
      
      document.querySelector("#header").style.display = 'none   ';
      document.querySelector("#content").style.display = 'block ';   
     loadQuestion(curr_ques);
     timer=30;
     document.querySelector('#timeLeft').textContent =timer;
     tempTimer= setInterval(reduceTimer, 1000);
  
 }
  
  
 function loadQuestion(curr_ques)
{
  if(curr_ques<5)
  {
    console.log("load question is called")
    
   

    document.querySelector("#ques").textContent=questions[curr_ques].que;

    document.querySelector("#option-1").textContent=questions[curr_ques].ans_opt[0];
    document.querySelector("#option-2").textContent=questions[curr_ques].ans_opt[1];
    document.querySelector("#option-3").textContent=questions[curr_ques].ans_opt[2];
    document.querySelector("#option-4").textContent=questions[curr_ques].ans_opt[3];
    
    ans=questions[curr_ques].corr_ans;    
    console.log(` answer is : ${ans}`);


  
  }
  else
  {
    endgame()
    timer=0
    document.querySelector('#timeLeft').textContent=timer;


  }
}
  
function checkAnswer(user_ans)
  {
  //   console.log("check answer is called")
  //  console.log(` temp answer is :${user_ans}`)
  //  console.log(questions[curr_ques])
  //  console.log(`real answeris : ${questions[curr_ques].corr_ans}`)

      if(questions[curr_ques].corr_ans == user_ans)
      {
        console.log("correct");
        score += 20;
        document.querySelector('#topScore').textContent = score
        // console.log(score)
        // console.log(`${curr_ques}`);
        // console.log(`${questions[curr_ques].que}`);
         curr_ques = curr_ques+1;
        loadQuestion(curr_ques)

      }
      else
      {
        timer-=10;
        curr_ques = curr_ques+1;
        loadQuestion(curr_ques)

      }

  }

  function reduceTimer()
  {
    if(timer>0)
    {
      timer--;
      document.querySelector('#timeLeft').textContent=timer;
    }
    else
    {
      endgame()
      
      
    }
  }

  function endgame()
  {
    timer=0;
    document.querySelector('#timeLeft').textContent=timer;

    document.querySelector("#content").style.display = 'none ';  

    document.querySelector("#endGameScore").textContent = `Your score is: ${score}`;
    document.querySelector("#endGame").style.display = "block";

      if(score>0)
      {
        document.querySelector("#save").style.display = "block";
        

      }
      else
      {

      }
     
  }

  function tempStorage()
  {
    console.log("tempStorage called");
    time=0;
    document.querySelector("#timeLeft").textContent = timer;

     localStorage.Name = document.querySelector('#playerName').value 
     localStorage.highscore = score;

     document.querySelector("#save").style.display = "none";
     document.querySelector("#endGame").style.display = "none";

    console.log("storage complete");
    document.querySelector("#header").style.display = 'block '; 
    document.querySelector("#timeLeft").textContent = timer;
    // loadGame();
     curr_ques=0;
     
     timer=30;

  }

  function clearScore()
  {
    if(localStorage.Name)
    {
      localStorage.Name = '';
      localStorage.highscore = '';
      
      document.querySelector("#save").style.display = "none";
      document.querySelector("#endGame").style.display = "none";
      document.querySelector("#header").style.display = "block";
      curr_ques= 0
      timer=30
      score=0
      document.querySelector("#topScore").textContent = score;
      document.querySelector("#timeLeft").textContent = time;

    }
  }


  





