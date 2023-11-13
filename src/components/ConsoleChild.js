export const ConsoleChild = (props) => {

    console.log("Console Child " + JSON.stringify(props.array2));
    const Users = props.array2;
    
    return (
        <>
            {Users.map((user)=> {
                return <div className="response">
                           <h3>{user.name}</h3>
                           <p>Has {user.age} old and is {user.friendly ? "friendly" :"not friendly"}</p>
                           <p><strong>Method 2 of if</strong>: Has {user.age} old and is {!user.friendly && " not "}friendly</p>
                       </div>;
            })}
        </>
    );
}