import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

export const Form = ({members, setEditableMembers}) => {

    const [typeInput, setTypeInput] = useState('pf');
    const [inputName, setinputName] = useState('');
    const [statusMsg, setStatusMsg] = useState('');

    const addNewObj = () => {
        if(inputName && !members.find(item => item.name === inputName)){
            const newData = {
                name : inputName,
                id : (members.length + 1).toString(),
                type : typeInput
            }
            setEditableMembers([...members, newData]);
            setStatusMsg('Adicionado com sucesso');
            setinputName('');
        } else{
            setStatusMsg('Input inválido ou usuário existente');
        }

    }

    return (
        <div className='form__container'>
            <h5>{statusMsg}</h5>
            <input type="text" placeholder='Nome' onChange={(e)=> setinputName(e.target.value)} value={inputName} />
            <select name="" onChange={(e)=> setTypeInput(e.target.value)}>
                <option value="pf">Pessoa Física</option>
                <option value="pj">Pessoa Jurídica</option>
               
            </select>
            <button onClick={()=> addNewObj()}>Adicionar</button>
            <Link to='/'>Voltar</Link>
        </div>
    )
}