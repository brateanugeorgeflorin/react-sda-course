import { User } from "./User";
import { Users } from "./db";

export const Home = () => {

    return(
        <div className="App mt-5 pb-5">
            {Users.map((user, i) => {
               return <User name={user.name} age={user.age} key={user.key} id={user.key} />;
            })}
        </div>
    );
}