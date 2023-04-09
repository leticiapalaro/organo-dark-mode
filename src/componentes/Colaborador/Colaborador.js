import './Colaborador.css'

export const Colaborador = (props) => {

	const estilo = {
		background: `linear-gradient(to bottom, ${props.corDestaque} 0%,${props.corDestaque} 40%,${props.corFundo} 40%,${props.corFundo} 100%)`
	};

	return (
		<div className="colaborador" style={estilo}>
			<img className="colaborador__img" src={props.foto} alt={`Foto do colaborador ${props.nome}`} />
			<h3 className="colaborador__nome">{props.nome}</h3>
			<h4 className="colaborador__cargo">{props.cargo}</h4>
			<button 
				className="colaborador__botao-excluir"
				style={{
					background:`${props.corDestaque}`, 
					color:`${props.corFundo}`
				}}
				onClick={props.removerColaborador}
			>
				Excluir
			</button>
		</div>
	);

}