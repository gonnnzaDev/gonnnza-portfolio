import './Tools.css'

import java from '../assets/svg/java.svg'
import py from '../assets/svg/py.svg'
import js from '../assets/svg/js.svg'
import ts from '../assets/svg/ts.svg'
import react from '../assets/svg/react.svg'
import mysql from '../assets/svg/mysql.svg'
import postgres from '../assets/svg/postgres.svg'
import maria from '../assets/svg/maria.svg'
import git from '../assets/svg/git.svg'
import tux from '../assets/svg/tux.svg'
import spring from '../assets/svg/spring-svgrepo-com.svg'
import mongo from '../assets/svg/mongo.svg'
import { Link } from 'react-router-dom'



export default function Tools() {


    return (

        <>

            <section className='tools-container'>
                <div className='info-buttons'>
                    <Link to="/projects" className="button-style">
                        My Projects
                    </Link>

                </div>


                <div className='tools-section'>
                    <h3>Lengs</h3>
                    <div className='tools-icons'>
                        <img src={java} alt='Java' className='tool-icon' />
                        <img src={py} alt='Python' className='tool-icon' />
                        <img src={js} alt='JavaScript' className='tool-icon' />
                        <img src={ts} alt='TypeScript' className='tool-icon' />
                    </div>
                </div>

                <div className='tools-section'>
                    <h3>FrameWorks</h3>
                    <div className='tools-icons'>
                        <img src={react} alt='React' className='tool-icon' />
                        <img src={spring} alt='Spring' className='tool-icon' />
                    </div>
                </div>

                <div className='tools-section'>
                    <h3>DataBases</h3>
                    <div className='tools-icons'>
                        <img src={mysql} alt='MySQL' className='tool-icon' />
                        <img src={postgres} alt='Postgres' className='tool-icon' />
                        <img src={maria} alt='MariaDB' className='tool-icon' />
                        <img src={mongo} alt='MongoDB' className='tool-icon' />
                    </div>
                </div>

                <div className='tools-section'>
                    <h3>Etc</h3>
                    <div className='tools-icons'>
                        <img src={git} alt='Git' className='tool-icon' />
                        <img src={tux} alt='Linux' className='tool-icon' />
                    </div>
                </div>
            </section>
        </>
    );

}