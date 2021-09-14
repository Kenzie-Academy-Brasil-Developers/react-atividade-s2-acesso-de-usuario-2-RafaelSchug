import { useParams } from "react-router"
import { Link } from "react-router-dom"


export const Costumer = ({members}) => {
    const { id } = useParams();
    const member = members.find(item=> item.id === id);
    return (
        <div>
            <h1>Detalhes do cliente</h1>

            <p>Nome: {member && member.name}</p>
            <Link to='/'>Voltar</Link>
        </div>
    )
}