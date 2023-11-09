import { useEffect, useState } from "react";

export const UseEffect = () => {
    const [tipResursa, setTipResursa] = useState("acasa");
    const [conditionareAfisare, setConditionareAfisare] = useState(false);

    console.log('no resource');

    useEffect(() => {
        console.log(tipResursa);
    }, [tipResursa]);

    return(
        <>
            <div className="useEffectLogic container">
                <div className="col-12 d-flex gap-3 mb-3 mt-3 pt-3">
                    <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => setTipResursa("despre-noi")}>Despre noi</button>
                    <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => setTipResursa("tarife")}>Tarife</button>
                    <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => setTipResursa("contact")}>Contact</button>
                </div>
                
                <div className="col-12 mb-3 pb-5">
                    <h1>Slug pagina curenta: {tipResursa}</h1>
                </div>

                <div className="col-12 mb-3 pb-5">
                    <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => setConditionareAfisare((prev) => !prev) }>Conditionare</button>
                    {conditionareAfisare && <div className="alert alert-primary mt-3" role="alert">Am activat info Box</div>}
                </div>
            </div>
        </>
    );
};