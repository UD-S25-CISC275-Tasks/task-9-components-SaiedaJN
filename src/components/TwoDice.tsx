import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    
    // States for both dice
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollleftdie = ()=> {setLeftDie(d6())};
    const rollrighttdie = ()=> {setRightDie(d6())};

    // Determine lose / win
    let message = "";
    if (leftDie === rightDie) {
        message = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <h3>Two Dice</h3>
            <div>
                <span data-testid="left-die">{leftDie}</span> {" - "}
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={rollleftdie}>Roll Left</Button>
                <Button onClick={rollrighttdie}>Roll Right</Button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}
