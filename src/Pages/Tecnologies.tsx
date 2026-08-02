import Projects from '../Components/Projects'
import Tools from '../Components/Tools'
import Navbar from '../Components/Navbar'
import './ProjectsPage.css'
export default function Proyects() {



    return (

        <>
            <Navbar />

            <main>

                <Tools />
                <div className='mobile'>

                    <Projects />
                </div>


            </main>

        </>



    );


}