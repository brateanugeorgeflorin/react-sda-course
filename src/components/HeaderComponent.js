import { useState } from 'react';
import { ConsoleChild } from './ConsoleChild';

export const HeaderComponent = (props) => {
    const [countState, setCountState] = useState(0);
    let count = 0;

    const add = () => {
        count++;
        console.log(count);
    };

    const addState = () => {
        setCountState(countState + 1);
    };

    console.log("Header Component " + JSON.stringify(props.arr));

    return (
        <>
            <header className="App-header container pt-3">
                <h1>HeaderComponent</h1>  
                <h2 className="mt-5">
                    Incrementare consola vs incrementare in HTML
                </h2>
                <hr />
                <div className="pt-3 pb-3">
                    <p>Asta se modifica doar in consola: {count}</p>
                    <button className="btn-primary btn" onClick={add}>Add</button>
                </div>
                <div className="pt-3 pb-3">
                    <p>Asta se modifica din react dinamic: {countState}</p>
                    <button className="btn-primary btn" onClick={addState}>Add with state React custom state 2</button>
                </div>
            </header>

            <div className="getProps container">
              
              <ConsoleChild array2 = {props.arr} />
            </div>
        </>
    );
}