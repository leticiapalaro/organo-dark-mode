import './CampoSelect.css'

export const CampoSelect = (props) => {

    const valorDigitado = (evento) => {
        props.novoValor(evento.target.value)
    }
    
    return(
        <div className="campo">

            <label 
                className="campo__input__label" 
                htmlFor={props.nome}
            >
                {props.nome}
            </label>

            <select 
                className="campo__input" 
                name={props.nome} 
                value={props.valor} 
                onChange={valorDigitado} 
                required
            > 
                <option defaultValue value="" hidden>Selecione uma opção</option>
                {props.itens.map(item => 
                    <option 
                        key={item.tag}
                        value={item.nome}
                    >
                        {item.nome}
                    </option>)
                }
            </select>

        </div>
    );
}