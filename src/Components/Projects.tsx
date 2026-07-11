import './Projects.css'

import java from '../assets/svg/java.svg'
import py from '../assets/svg/py.svg'
import js from '../assets/svg/js.svg'
import ts from '../assets/svg/ts.svg'

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


function ProjectArticle({ name, image, desc, colorr, tecnologies }) {


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



function TecnologyButton({ tecnologies }) {
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
