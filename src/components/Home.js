import { User } from "./User";
import { Users } from "./db";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
    const {monkeyName} = useContext(AppContext);

    return(
        <>
            <div className="container">
                <div className="App mt-5 pb-5 row row-cols-3">
                    <div className="heading h1 col-12 text-center pb-3">User component</div>
                    {Users.map((user, i) => {
                    return <User name={user.name} age={user.age} key={user.key} id={user.key} />;
                    })}
                </div>
                <h1 className="mt-3 mb-3">AppContext Works Get last accessed Monkey: {monkeyName}</h1>
            </div>
        </>
    );
}