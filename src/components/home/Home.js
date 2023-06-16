import './home.css';
import banner  from "../../images/banner.png"

export default function Home() {
    return (
        <section className='home'>
            <div className='home-content'>
                <div className='home-text'>
                    <h1>Welcome!</h1>
                    <p>to my homepage!
                    Here you will find information about me and my work.
                    Join me to learn more and download my resume!</p>
                    <button>Resume</button>
                </div>
                <div className='home-illustration'>
                    <img src={banner} alt='Illustration' />
                </div>
            </div>
        </section>
    );
}