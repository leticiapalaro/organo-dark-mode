import './CampoInput.css'



export const CampoInput = (props) => {

    const valorDigitado = (evento) => {
        props.novoValor(evento.target.value)
    }
    
    return (
    <div className="campo">
    
        <label 
            className="campo__input__label" 
            htmlFor={props.nome}
        >
            {props.nome}
        </label>

        <input 
            className="campo__input"
            name={props.nome} 
            placeholder={props.placeholder} 
            type={props.type} 
            value={props.valor} 
            onChange={valorDigitado} 
            required
        />

    </div>
    );
}