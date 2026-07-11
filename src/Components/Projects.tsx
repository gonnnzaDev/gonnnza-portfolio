import './Projects.css'

import java from '../assets/svg/java.svg'
import js from '../assets/svg/js.svg'

import appointmee from '../assets/appointmee.png'

export default function Projects() {



    return (
        <>
            <main className='projects-container'>

                <ProjectArticle
                    name="AppointMee"
                    image={appointmee}
                    desc="An management system developed as the Final Project for the Programming III at the UTN"
                    colorr="#422606"
                    tecnologies={[java, js]}
                />


                <footer>
                    <p>that's all for now :3 </p>
                </footer>
            </main>

        </>

    );
}
type ProjectArticleProps = {
    name: string;
    image: string;
    desc: string;
    colorr: string;
    tecnologies: string[];
};


function ProjectArticle({ name, image, desc, colorr, tecnologies }: ProjectArticleProps) {


    return (

        <>
            <article className='article-container'>
                <header
                    style={{
                        background: `linear-gradient(to right, ${colorr}, #111)`
                    }}
                >
                    <img className="project-image" src={image} />
                    <h4 >{name}</h4>

                    <div className="tecnologies">
                        <TecnologyButton tecnologies={tecnologies} />
                    </div>

                </header>
                <main>
                    <p >{desc}</p>
                </main>
            </article>

        </>

    );

}

type TecnologyButtonProps = {
    tecnologies: string[];
};

function TecnologyButton({ tecnologies }: TecnologyButtonProps) {
    return (
        <>
            {tecnologies.map((tecnology, index) => (
                <article key={index} className="tecnology-icon">
                    <img src={tecnology} alt="" />
                </article>
            ))}
        </>
    );
}
