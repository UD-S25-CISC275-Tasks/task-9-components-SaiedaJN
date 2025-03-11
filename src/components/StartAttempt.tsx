import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setinProgress] = useState<Boolean>(false);



    return (<div>
        <h3>Attempts Remaining: {attempts}</h3>
        <Button onClick={()=> {setinProgress(true); setAttempts(attempts-1)}}
            disabled={inProgress||attempts === 0}> Start Quiz</Button>
        <Button onClick={()=> setinProgress (false)} disabled={!inProgress} > Stop Quiz </Button>
        <Button onClick={()=> setAttempts(attempts+1)} disabled ={inProgress}> Mulligan</Button>
        </div>);


    
}
