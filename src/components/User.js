import { useState } from "react";

export const User = (props) => {
    const [bg, setbgSetup] = useState(true);

    const brown = {
        backgroundColor : "brown",
    };

    const tomato = {
        backgroundColor : "tomato",
    };

    return (
        <div className="mb-3 p-3" style={bg ? brown : tomato}>
            <h2>{props.name}</h2>
            <p>Varsta: {props.age}</p>
            <p>ID: {props.id}</p>
            <button onClick={() => setbgSetup((prev) => !prev)}>Schimbare culoare</button>
        </div>
    );
}