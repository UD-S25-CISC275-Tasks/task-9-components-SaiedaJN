import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Enum representing holidays
export enum Holiday {
    Christmas = "🎄",
    Easter = "🐰",
    Halloween = "🎃",
    NewYear = "🎆",
    Thanksgiving = "🦃"
}

export function CycleHoliday(): React.JSX.Element {
    // State to track the current holiday
    const [holiday, setHoliday] = useState<Holiday>(Holiday.Christmas);

    // Define the order for cycling alphabetically
    const alphabeticalOrder: Record<Holiday, Holiday> = {
        [Holiday.Christmas]: Holiday.Easter,
        [Holiday.Easter]: Holiday.Halloween,
        [Holiday.Halloween]: Holiday.NewYear,
        [Holiday.NewYear]: Holiday.Thanksgiving,
        [Holiday.Thanksgiving]: Holiday.Christmas
    };

    // Define the order for cycling by time of year
    const yearOrder: Record<Holiday, Holiday> = {
        [Holiday.NewYear]: Holiday.Easter,       
        [Holiday.Easter]: Holiday.Halloween,     
        [Holiday.Halloween]: Holiday.Thanksgiving, 
        [Holiday.Thanksgiving]: Holiday.Christmas, 
        [Holiday.Christmas]: Holiday.NewYear     
    };

    return (
        <div>
            <h3>Holiday: {holiday}</h3>
            <Button 
                onClick={() => {
                    setHoliday(alphabeticalOrder[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button 
                onClick={() => {
                    setHoliday(yearOrder[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
