import { useState } from 'react';

export const HeaderComponent = () => {
    const [countState, setCountState] = useState(0);
    let count = 0;

    const add = () => {
        count++;
        console.log(count);
    };

    const addState = () => {
        setCountState(countState + 1);
    };

    return (
        <>
            <header className="App-header container">
                <h1 className="mt-5">
                    Main Header
                </h1>
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
        </>
    );
}