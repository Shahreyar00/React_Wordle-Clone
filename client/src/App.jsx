import React, { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import { AiFillSetting } from "react-icons/ai";
import { GoGraph } from "react-icons/go";

const App = () => {
    const [solution, setSolution] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3001/solutions")
            .then(res=>res.json())
            .then(json=>{
                const randomSolution = json[Math.floor(Math.random()*json.length)];
                setSolution(randomSolution.word);
            })
    },[setSolution]);

    return (
        <div className="App">
            <h1>
                <div className="left"> 
                   
                </div>
                <div className="middle">
                    Wordle
                </div>
                <div className="right">
                    <AiFillSetting className="svgIcon" />
                    <GoGraph className="svgIcon" />
                </div>

            </h1>
            {solution && <Wordle solution={solution} />}
        </div>
    )
}

export default App