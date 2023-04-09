import './BotaoSubmit.css'

export const BotaoSubmit = (props) => {
    return (
    
    <div className="botao">
    
        <button 
            className="botao__submit" 
            type="submit"
        >
            {props.children}
        </button>
        
    </div>

    );
}