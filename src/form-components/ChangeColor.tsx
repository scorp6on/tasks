import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((col: string) => (
                <Form.Check
                    inline
                    key={col}
                    type="radio"
                    name="color"
                    onChange={() => {
                        setColor(col);
                    }}
                    label={col}
                    value={col}
                    checked={color === col}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: color, color: "white" }}
            >
                {color}
            </div>
        </div>
    );
}
