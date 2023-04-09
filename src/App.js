import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import ListaTimes from './componentes/Listas/ListaTimes';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import './App.css';
import { useState } from 'react'

function App() {
	const [colaboradores, setColaboradores] = useState([]);
	const [exibirFormulario, setExibirFormulario] = useState(true); // os dados iniciam visiveis

	const novoColaborador = (colaborador) => {
		setColaboradores([...colaboradores, colaborador]);
		setExibirFormulario(false); // esconde o formulário após enviar os dados
	}

	// filtrar todo array de colaboradores, procurando o 'colaborador' específico
	// se o colaborador tiver o nome ou (||) o time diferente da busca, será mantido
	// o filter filtra todos que 'não tem o nome OU não tem o time' e mantém no array
	// só é descartado 'o que tiver tiver mesmo nome E tiver mesmo time'
	const removerColaborador = (nome, time) => {
		const atualizarColaboradores = colaboradores.filter(colaborador => colaborador.nome !== nome || colaborador.time !== time);
		setColaboradores(atualizarColaboradores);
		if (atualizarColaboradores.length === 0) window.location.reload();
	}

	// fixa o painel superior no topo da página se o formulário não estiver visivel
	let fixarTop = (!exibirFormulario) ? `fixar-top` : ''

	// se o array de colaboradores não estiver vazio e o formulário não estiver visível ? aplicar html : vazio
	let visualizarTituloPrincipal = (!exibirFormulario && colaboradores.length !== 0) ?
		<div className={`titulo-principal ${fixarTop}`}>
			<h1 className="titulo-principal__h1">Minha Organização<br />
				<button
					className="botao__novo-colaborador"
					onClick={() => setExibirFormulario(true)}
				>
					<img
						className="botao__novo-colaborador__img"
						src="/img/botao-novo-colaborador.png"
						alt="Botão adicionar novo colaborador"
					/>
				</button>
			</h1>
		</div>
		: '';

	return (
		<div className="App">
			<header className="App-header">

				{/* 
					Tudo que tiver o exibirFormulario, inicia com o estado True (visivel).
					A partir da função novoColaborador, ao colaborador ser adicionado o estado passa para False, tornando o campo não visivel. 
				*/}

				{exibirFormulario &&
					<Banner />}
			</header>
			<main>
				{exibirFormulario &&
					<Formulario novoColaborador={colaborador => novoColaborador(colaborador)} />}
				{visualizarTituloPrincipal}
				<div className="times">
					{ListaTimes.map(time =>
						<Time
							key={time.tag}
							colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
							nome={time.nome}
							corFundo={time.fundo}
							corDestaque={time.destaque}
							removerColaborador={(nome) => removerColaborador(nome, time.nome)} //pedindo apenas o nome do colaborador, pois o time já está definido na props
						/>)}
				</div>
			</main>
			<footer>
				<Rodape />
			</footer>
		</div>
	);
}

export default App;