import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => {
                    setRequestedAttempts(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft <= 0}
            >
                use
            </button>
            <button
                onClick={() => {
                    const parsedAttempts = parseInt(requestedAttempts);
                    if (!isNaN(parsedAttempts)) {
                        setAttemptsLeft(attemptsLeft + parsedAttempts);
                    }
                }}
            >
                gain
            </button>
        </div>
    );
}
