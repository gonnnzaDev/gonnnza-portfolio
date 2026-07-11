import './Banner.css'
import SocialMedia from './SocialMedia'
export default function Banner() {
    const nombre = "gonnnzaDev";
    return (
        <>
            <main className='container-banner'>

                <div className='banner-info'>
                    <h1>
                        {nombre.split("").map((letter, index) => (
                            <span
                                key={index}
                                style={{ animationDelay: `${index}s` }}
                            >
                                {letter}
                            </span>
                        ))}</h1>

                    <SocialMedia />
                </div>

                <div className='buttons-container'>
                    <Boton texto="About Me" link="/about-me" />
                    <Boton texto="Projects" link="/projects" />
                    <Boton texto="" link="" />

                </div>


            </main>


        </>
    )


}

function Boton({ texto, link }) {
    return (
        <a href={link} className='button-banner'>
            {texto}
        </a>
    );

}