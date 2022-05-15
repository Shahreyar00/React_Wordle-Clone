import React, { useEffect, useState } from 'react'

const Keypad = ({ usedKeys }) => {
    const [letters, setLetters] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3001/letters")
            .then(res=>res.json())
            .then(json=>{
                setLetters(json)
            })
    },[]);

    return (
        <div className="keypad">
            {letters && letters.map((l,i)=>{
                const color = usedKeys[l.key]
                return(
                    <div key={i} className={color}>{l.key}</div>
                )
            })}
        </div>
    )
}

export default Keypad