import { useNavigate, useParams } from "react-router-dom"

export const Monkey = () => {
    const param = useParams();
    const navigate = useNavigate();

    return (
        
        <div className="container pt-3">
            <h1>{param.id} Monkey</h1>
            <button className="btn btn-primary" onClick={() => navigate('/monkeys')}>Inapoi</button>
        </div>
        )
}