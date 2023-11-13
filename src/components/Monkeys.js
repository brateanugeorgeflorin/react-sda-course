import { NavLink } from 'react-router-dom';

export const Monkeys = () => {

    const Ids = [1, 2, 3];

    return (
        <div className="container pt-3">
        <h1>Monkeys</h1>
        <ul>
            {Ids.map((id) => {
                return (
                <li className="nav-item">
                    <NavLink to={`/monkeys/${id}`} className="nav-link" activeclassname="active">Monkey {id}</NavLink>
                </li>
                )
            })}
            
        </ul>
        </div>
        )
}