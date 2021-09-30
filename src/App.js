import { useState } from "react"
import './App.css'


function App() {

  const questions = [
    {
      Question: "what is JSX",
      option: [
        "JavaScript XML",
        "JawaScript XML",
        "JavaScript",
        "JS"
      ],
      correctAnswer: "JavaScript XML",
      isCorrect: false
    }, 
    {
      Question: "what is CSS",
      option: [
        "Call Style Sheet",
        "Calling Styles Shirt",
        "Cascading Style Sheet",
        "CSS"
      ],
      correctAnswer: "Cascading Style Sheet",
      isCorrect: false
    },
    {
      Question: "what is JS",
      option: [
        "JavaScript",
        "XML",
        "CSS",
        "JS"
      ],
      correctAnswer: "JavaScript",
      isCorrect: false
    },
    {
      Question: "what is HTML",
      option: [
        "Hypertext Makeup Language",
        "Hypertext Markup Loan",
        "Hypertxt Markup Language",
        "Hypertext Markup Language"
      ],
      correctAnswer: "Hypertext Markup Language",
      isCorrect: false
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

          {currentQuestionIndex !== questions.length ?
            //fragment
            <>
            <p>
              Question {currentQuestionIndex+1}/4
            </p>

              <h1>
                  {currentQuestionIndex+1}) {questions[currentQuestionIndex].Question}
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

            :

            <div>
            
            <h1>
              QUIZ HAS ENDED
            </h1>

            <h2>
              {console.log(score)}
              {console.log(questions.length)}   
              {score/4*100}% 
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
