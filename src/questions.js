import Data from "./data";
import { useState } from "react";
import Question from "./question";
const Questions=()=>{
    const [questions,setQuestions]=useState(Data)
   
    return(
        <div className="questions">
            <h1>Question And Answers About Login</h1>
            <div className="content">
            {questions.map((question)=>{
                return(
             <Question key={question.id} {...question} />   
           )
            })} 
          </div>
        </div>
    )

}
export default Questions;