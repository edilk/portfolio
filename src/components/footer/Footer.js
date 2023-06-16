import './footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className='contruction'>
                <h3>Under construction</h3>
            </div>
            <section>
                <ul>
                    <li><a href='https://github.com/edilk/' rel='noreferrer' target='_blank'><FaGithub /></a></li>
                    <li><a href='https://www.linkedin.com/in/edil-kamchybekov-bb8526234/' rel='noreferrer' target='_blank'><FaLinkedinIn /></a></li>
                    <li><a href='https://twitter.com/EKamchybekov' rel='noreferrer' target='_blank'><FaTwitter /></a></li>
                    <li><a href='https://www.instagram.com/kamchybekov28/' rel='noreferrer' target='_blank'><FaInstagram /></a></li>
                    <li><a href='https://www.facebook.com/edil.kamchybekov' rel='noreferrer' target='_blank'><FaFacebook /></a></li>
                </ul>
                <hr />
                <p>&copy; 2023 - Edil Kamchybekov</p>
            </section>
        </footer>
    );
}