import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{
                    backgroundColor: "#282c34",
                    color: "white",
                    padding: "20px",
                }}
            >
                <h1>
                    UD CISC275 with React Hooks and TypeScript Ronald Kouloun
                    Hello World
                </h1>
            </header>

            <img
                src="C:\Users\vgnna\OneDrive\Pictures\yu gi oh.PNG"
                alt="YuGiOh"
            />

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <ul>
                <li>First element</li>
                <li>Second element</li>
                <li>Third element</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                }}
            >
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default App;
