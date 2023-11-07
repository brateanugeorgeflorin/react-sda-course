import { useState } from "react";
import { PlusCircle, DashCircle, XCircle } from 'react-bootstrap-icons';
import { Button } from "./components/utils/Button";

export const AboutState = () => {
    const [inputState, setInputState] = useState('Aici se va schimba informatia dinamic');

    const changeInputValue = (event) => {
        console.log(event.target.value);
        setInputState(event.target.value);
    };

    return (
        <>
            <div className="pt-4 pb-4">
                <p>Exemplu prin care outputam ce scriem intr-un input</p>
                <input className="form-control" type="text" onChange={changeInputValue} />
                <small className="form-text text-muted">{inputState}</small>
            </div>
        </>
    );
};


export const IncrementOption = () => {
    const [rezultat, setRezultat] = useState(0);

    const incrementOpt = () => {
        setRezultat(rezultat + 1);
    };

    const decrementOpt = () => {
        setRezultat(rezultat - 1);
    };
    
    const goToZero = () => {
        setRezultat((prev) => prev = 0);
    };

    return (
        <>
            <div className="text-center fs-2">
                <p>{rezultat}</p>
                <div className="d-flex gap-2 align-content-center justify-content-center">
                    <button className="btn btn-success" onClick={incrementOpt}>Incrementeaza <PlusCircle /></button> 
                    <button className="btn btn-secondary" onClick={decrementOpt}>Decrementeaza <DashCircle /></button> 
                    <button className="btn btn-danger" onClick={() => {setRezultat((prev) => prev = 0)}}>Valoare zero <XCircle /></button>
                </div>
            </div>
        </>
    );
};


export const OpositeButton = () => {
    const [seeText, setSeeText] = useState(true);

    const color1 = {
        color: "white",
        backgroundColor: "gray",
    }

    const color2 = {
        color: "white",
        backgroundColor: "tomato",
        fontWeight: "bold"
    }

    return (
        <>
            <Button setSeeText={setSeeText} />
            <div className="mt-3 p-3 rounded" style={seeText ? color1 : color2}>{seeText ? 'Pot aprinde lumina' : 'Ce-ar fi s-o stingi ca ma doare corneea???'}</div>
        </>
    );
};