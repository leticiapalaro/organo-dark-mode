import './Rodape.css'

export const Rodape = () => { 
    return(

		<div className="footer">
			<img 
				className="footer__img__logo" 
				src="/img/logo.png"
				alt="Logo do Organo"
			/>
			<div className="footer__assinatura">
				<p className="footer__assinatura__descricao">Dark Mode por Letícia Palaro</p>
				<a href="https://www.linkedin.com/in/leticiapalaro/">
					<img 
						className="footer__assinatura__img" 
						src="/img/linkedin.png"
						alt="Link encaminhando ao LinkedIn da Letícia Palaro"
					/>
				</a>
				<a href="https://github.com/leticiapalaro">
					<img 
						className="footer__assinatura__img" 
						src="/img/github.png"
						alt="Link encaminhando ao GitHub da Letícia Palaro"
					/>
				</a>
			</div>
		</div>

    );
}