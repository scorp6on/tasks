import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    HALLOWEEN = "🎃",
    CHRISTMAS = "🎄",
    NEW_YEAR = "🎉",
    THANKSGIVING = "🦃",
    VALENTINE = "❤️",
}

const holidaysAlphabetically = [
    Holiday.CHRISTMAS,
    Holiday.HALLOWEEN,
    Holiday.NEW_YEAR,
    Holiday.THANKSGIVING,
    Holiday.VALENTINE,
];

const holidaysByYear = [
    Holiday.NEW_YEAR,
    Holiday.VALENTINE,
    Holiday.HALLOWEEN,
    Holiday.THANKSGIVING,
    Holiday.CHRISTMAS,
];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.HALLOWEEN);

    const advanceAlphabetically = () => {
        const currentIndex = holidaysAlphabetically.indexOf(holiday);
        setHoliday(
            holidaysAlphabetically[
                (currentIndex + 1) % holidaysAlphabetically.length
            ],
        );
    };

    const advanceByYear = () => {
        const currentIndex = holidaysByYear.indexOf(holiday);
        setHoliday(holidaysByYear[(currentIndex + 1) % holidaysByYear.length]);
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
