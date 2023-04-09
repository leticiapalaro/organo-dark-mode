import './Banner.css'

export const Banner = () => {
    return (

        <div className="banner">

            <img 
                src="/img/banner.png" 
                className="banner__img banner__principal" 
                alt="banner principal da página Organo"
            />

            <img 
                src="/img/banner-mobile.png" 
                className="banner__img banner__mobile" 
                alt="banner principal da página Organo"
            />

        </div>

    );
}