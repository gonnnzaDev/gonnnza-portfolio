import './About.css'
import { useEffect, useState } from 'react'

export default function About() {
const texto = 
`
const aboutMe = "hiii, i'm gonnnza, a 19-year-old software developer from Argentina passionate about technology. ever since i was a boy, i've been fascinated by this world.

i still remember opening cheat engine to try to 'hack' games out of pure curiosity.
over time, that curiosity grew into a passion for software development.

i'm currently completing the final semester of the University programming technician degree at the universidad tecnologica nacional (UTN) in mar del plata, argentina.
today, i strive to build secure, efficient, and well-designed software systems that solve real-world problems. i'm always eager to learn new technologies, improve my skills, and take on new challenges.";`;

    const [text, setText] = useState('')

    /*para que arranque al final porque sino jojo no una paja esperar tatno */
    useEffect(() => {
        let idx = texto.length / 1.1;
        const speed = 42;

        const handle = setInterval(() => {
            idx++
            setText(texto.slice(0, idx))
            if (idx >= texto.length) clearInterval(handle)
        }, speed)
        return () => clearInterval(handle)
    }, [])

    return (
        <>
            <main className="about-container">
                <div className="about-info">
                    <div className="code-line" aria-label="typing about">
                        <code>{text}</code>
                        <span className="caret" aria-hidden="true" />
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/239072006?v=4" alt="avatar" />
                </div>
            </main>
        </>
    )
}