import { User } from "./User";
import { Users } from "./db";

export const Home = () => {

    return(
        <>
            <div className="container">
                <div className="App mt-5 pb-5 row row-cols-3">
                    <div className="heading h1 col-12 text-center pb-2">User component</div>
                    {Users.map((user, i) => {
                    return <User name={user.name} age={user.age} key={user.key} id={user.key} />;
                    })}
                </div>
            </div>
        </>
    );
}