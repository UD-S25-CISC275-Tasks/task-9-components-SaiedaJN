import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // Answer should not be visible initially, so should be initialized to false
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <Button onClick={() => {
                setVisible(!visible);
            }}>
                Reveal Answer
            </Button>
            {visible && <div>42!</div>}
        </div>
    );
}

