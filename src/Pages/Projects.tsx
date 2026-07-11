import Projects from '../Components/Projects'
import Tools from '../Components/Tools'
import Navbar from '../Components/Navbar'
export default function Proyects() {

    return (

        <>
            <Navbar />

            <main style={
                {
                    display: 'flex'
                }
            }>

                <Tools />
                <Projects />


            </main>

        </>



    );


}