import Colaborador from '../Colaborador';
import './Time.css'

export const Time = (props) => {  
    const corDestaque = props.corDestaque;
    const corFundo = props.corFundo;
    
    if (props.colaboradores.length === 0) {
        return null;
    }

    return (
        <div className="time" key={props.nome}>
            <h2 className="time__nome-time" style={{borderBottom:`4px solid ${corDestaque}`}}>
                {props.nome}
            </h2>
            <div className="membros">
                {props.colaboradores.map( colaborador => 
                <Colaborador
                    key={colaborador.nome}
                    foto={colaborador.foto}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    corFundo={corFundo}
                    corDestaque={corDestaque}
					removerColaborador={() => props.removerColaborador(colaborador.nome)}
                />)}
            </div>
        </div>
    );
}