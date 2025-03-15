import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

function Doubler({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (val: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (val: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useDoubleHalfState();

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/* Passing dhValue and setDhValue to child components */}
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
