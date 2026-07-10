import './Banner.css'
import SocialMedia from './SocialMedia'
export default function Banner() {
    const nombre = "gonnnzaDev";
    return (
        <>
            <div className='container-banner'>

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

            </div>

        </>
    )


}