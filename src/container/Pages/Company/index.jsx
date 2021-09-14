import { useParams } from "react-router"
import { Link } from "react-router-dom"


export const Company = ({members}) => {
    const { id } = useParams();
    const member = members.find(item=> item.id === id);
    return (
        <div>
            <h1>Detalhes da empresa</h1>

            <p>Nome da empresa: {member && member.name}</p>
            <Link to='/'>Voltar</Link>
        </div>
    )
}