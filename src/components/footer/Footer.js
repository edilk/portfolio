import './footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <section>
                <ul>
                    <li><a href='https://github.com/edilk/'><FaGithub /></a></li>
                    <li><a href='https://www.linkedin.com/in/edil-kamchybekov-bb8526234/'><FaLinkedinIn /></a></li>
                    <li><a href='https://twitter.com/EKamchybekov'><FaTwitter /></a></li>
                    <li><a href='https://www.instagram.com/kamchybekov28/'><FaInstagram /></a></li>
                    <li><a href='https://www.facebook.com/edil.kamchybekov'><FaFacebook /></a></li>
                </ul>
                <hr />
                <p>&copy; 2023 - Edil Kamchybekov</p>
            </section>
        </footer>
    );
}