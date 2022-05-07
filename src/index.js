import React from "react";
import ReactDOM from "react-dom";
import Questions from "./questions";
import './index.scss'
const App =()=>{
return (
    <div className="app">
        <Questions />
    </div>
)
}
ReactDOM.render(<App />,document.getElementById('root'))