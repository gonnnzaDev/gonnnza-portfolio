import './Projects.css'

export default function Projects() {



    return (
        <>
            <main className='projects-container'>
                <ProjectArticle
                    name="AppointMee"
                    image="../assets/AppointMeeLogo.png"
                    desc="Gestor de turnos para Trabajo Practico Final de la Materia Programacion III en la Universidad Tecnologica Nacional"
                    colorr="#422606"
                />
                <footer>

                    <p>Parece que llegaste al final :3</p>
                </footer>
            </main>

        </>

    );
}


function ProjectArticle({ name, image, desc, colorr }) {


    return (

        <>
            <article className='article-container'>
                <header
                    style={{
                        background: `linear-gradient(to right, ${colorr}, #111)`
                    }}
                >
                    <img src={image} />
                    <h4 >{name}</h4>

                </header>
                <main>
                    <p >{desc}</p>
                </main>
            </article>

        </>

    );

}

