import { useState } from "react";

export const User = (props) => {
    const [bg, setbgSetup] = useState(true);

    const brown = {
        backgroundColor : "#f7f7f7",
    };

    const tomato = {
        backgroundColor : "tomato",
    };

    return (
        <div className="col">
            <div className="mb-3 p-3 rounded" style={bg ? brown : tomato}>
                <h2>{props.name}</h2>
                <p>Varsta: {props.age}</p>
                <p>ID: {props.id}</p>
                <button className="btn btn-primary" onClick={() => setbgSetup((prev) => !prev)}>Schimbare culoare</button>
            </div>
        </div>
    );
}