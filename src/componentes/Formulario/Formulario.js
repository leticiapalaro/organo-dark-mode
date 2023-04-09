import BotaoSubmit from '../BotaoSubmit';
import CampoInput from '../CampoInput';
import CampoSelect from '../CampoSelect';
import ListaCargos from '../Listas/ListaCargos.js';
import ListaTimes from '../Listas/ListaTimes.js';
import './Formulario.css'
import { useState } from 'react'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [foto, setFoto] = useState('https://')
    const [time, setTime] = useState('')
    
    const enviarFormulario = (evento) => {
        
		// Previnindo a ação de recarregar a página do navegador.
		evento.preventDefault()
        
		// Usando a função novoColaborador() do '../App.js' para setar um novo membro.
		props.novoColaborador({
            nome,
            cargo,
            foto,
            time
        })

		// Depois que o ovo membro foi adicionado, limpando as constantes do formulário.
		// Para garantir que os campos estejam em branco no caso de uma nova adição.
        setNome('')
        setCargo('')
        setFoto('https//')
        setTime('')

    }
    
    return(
        <section>
            <form className="formulario" onSubmit={enviarFormulario}>
                
                <CampoInput 
                    nome="Nome" 
                    type="text" 
                    placeholder="Insira o nome"
                    valor={nome}
                    novoValor={valor => setNome(valor)}
                />
                
                <CampoSelect 
                    nome="Cargo" 
                    itens={ListaCargos}
                    valor={cargo}
                    novoValor={valor => setCargo(valor)}
                />
                
                <CampoInput 
                    nome="Foto" 
                    type="url" 
                    placeholder="Insira a url"
                    valor={foto}
                    novoValor={valor => setFoto(valor)}
                />
                
                <CampoSelect 
                    nome="Time"
                    itens={ListaTimes}
                    valor={time}
                    novoValor={valor => setTime(valor)}
                />
                
                <BotaoSubmit>Criar Card</BotaoSubmit>
                
            </form>
        </section>
    );
}