import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State for the selected answer
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedAnswer}
                onChange={(e) => {
                    setSelectedAnswer(e.target.value);
                }}
            >
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
