import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const Monkey = (props) => {
    const param = useParams();
    const navigate = useNavigate();

    const [monkeyFound, setMonkeyFound] = useState("");

    useEffect(() => {
        props.monkeysArr.map((m) => {
                if(m.id === +param.id) {
                    setMonkeyFound(m);
                }
            }
        )
    }, []);

    return (
        
        <div className="container pt-3">
            <h1>{monkeyFound.name}</h1>
            <p>is {monkeyFound.age} years old and is {!monkeyFound.friendly && "not "} friendly</p>
            <button className="btn btn-primary" onClick={() => navigate('/monkeys')}>Inapoi</button>
        </div>
        )
}