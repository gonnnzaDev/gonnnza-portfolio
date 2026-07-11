import './Navbar.css'
import main from'../assets/main.png'
import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <>
            <nav className='navbar-container'>
                <ul className='navbar__list'>
                    <li className='navbar__list-item'>
                        <Link to="/projects">Projects</Link>

                    </li>

                    <li className='navbar__list-item'>
                        <Link to="/">
                            <img src={main} alt="" />
                        </Link>
                    </li>
                    <li className='navbar__list-item'>

                        <Link to="/about-me">AboutMe</Link>

                    </li>
                    
                </ul>
            </nav>
        
        </>

    );


}
