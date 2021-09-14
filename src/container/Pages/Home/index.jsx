import { Link } from "react-router-dom"
export const Home = ({members}) => {
    return (
        members.map(({id, name, type})=> {
            return (
                <div key={id}>
                    <Link to={type === 'pj' ? `/company/${id}` : `/costumer/${id}` }>{name}</Link>
                </div>
            )
        })

    )
}