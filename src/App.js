import { useState } from "react"
import './index.js'
import './App.css'

function App() {
    
    // var Progress = require('react-progressbar');

  const questions = [
    {
      Question: "What is JSX?",
      option: [
        "JavaScript XML",
        "JawaScript XML",
        "JavaScript",
        "JS"
      ],
      correctAnswer: "JavaScript XML?"
    }, 
    {
      Question: "What is CSS",
      option: [
        "Call Style Sheet",
        "Calling Styles Shirt",
        "Cascading Style Sheet",
        "CSS"
      ],
      correctAnswer: "Cascading Style Sheet"
    },
    {
      Question: "What is JS?",
      option: [
        "JavaScript",
        "XML",
        "CSS",
        "JS"
      ],
      correctAnswer: "JavaScript"
    },
    {
      Question: "What is SQL?",
      option: [
        "Structure Querry Language",
        "Structure Quick Language",
        "SQL",
        "Strict Querry Lan"
      ],
      correctAnswer: "Structure Querry Language"
    },
    {
      Question: "Which is an input device?",
      option: [
        "Mice",
        "Monitor",
        "Speaker",
        "Mouse"
      ],
      correctAnswer: "Mouse"
    },
    {
      Question: "Which is output device?",
      option: [
        "Mouse",
        "Monitor",
        "Keyboard",
        "Trackpad"
      ],
      correctAnswer: "Monitor"
    },
    {
      Question: "Which is the most powerful computer?",
      option: [
        "Mini computer",
        "Super computer",
        "Mainframe computer",
        "Wokstation computer"
      ],
      correctAnswer: "Super computer"
    },
    {
      Question: "What is CISCO?",
      option: [
        "Programing Language",
        "Computer",
        "Networking software",
        "Hacking software"
      ],
      correctAnswer: "Networking software"
    },
    {
      Question: "What is Linux?",
      option: [
        "Networking software",
        "Operating system",
        "Hacking software",
        "Operating software"
      ],
      correctAnswer: "Operating system"
    },
    {
      Question: "What is PSU?",
      option: [
        "Power Supply Unit",
        "Power Suppliment Unit",
        "Power Suppliment UI",
        "Power Supply UI"
      ],
      correctAnswer: "Power Supply Unit"
    },
    {
      Question: "What is GPU?",
      option: [
        "Grade Percentage Unit",
        "Video card",
        "Graphics Processing Unit",
        "CPU"
      ],
      correctAnswer: "Graphics Processing Unit"
    },
    {
      Question: "How was this Quiz?",
      option: [
        "Easy",
        "Very Easy",
        "Very Very Easy",
        "Very Very Very Easy"
      ],
      correctAnswer: "Very Easy"
    }
  ]

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)

  const next = () => {
    //To cycle the questions
    setcurrentQuestionIndex(currentQuestionIndex + 1)

    //to cross check the selected radio button with correct answer
    const rbs = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
    console.log(selectedValue);

    //to check if answer is correct or not
    {
      selectedValue == questions[currentQuestionIndex].correctAnswer &&
      setScore(score+1)
    }
  
  //for clearing the radio button for next question
  let ele = document.getElementsByName("choice");
  for(var i=0; i<ele.length; i++)
      ele[i].checked = false;
  }

  const startAgain = () => {
    setcurrentQuestionIndex(0)
    setScore(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        
          {
          //If
          currentQuestionIndex !== questions.length ?
            //fragment
            <>
            
            {/* <p>
            <Progress completed={(currentQuestionIndex+1)/questions.length} />
            </p> */}

            <p>
              Question {currentQuestionIndex+1}/{questions.length}
            </p>

              <h1>
                  Q. {questions[currentQuestionIndex].Question}
              </h1>

              <p>
              {questions[currentQuestionIndex].option.map((item, index) => {
                      return <>
                      <input type="radio" name="choice" value={item} id={index}/>
                          {item}
                          <br></br>
                      </>
                  })}
              </p>

              <button onClick={next}>NEXT</button>
            </>
            //Else
            :
            <div>
            
            <h1>
              QUIZ HAS ENDED
            </h1>

            <h2>
              {console.log(score)}
              {console.log(questions.length)}   
              Score {score/(questions.length)*100}% 
            </h2>
            
            <p>
              No. of correct answers {score}
              {<br></br>}
              No. of wrong answers {questions.length - score}
            </p>

            <button onClick={startAgain}>START AGAIN</button>
            
            </div>
          }
      </header>
    </div>
  );
}

export default App;
