import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <footer>
            <div className='social-links'>
                <a href="https://github.com/edilk" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/edil-kamchybekov-bb8526234/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://www.instagram.com/kamchybekov28/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                <a href="https://www.facebook.com/edil.kamchybekov/" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                <a href="https://twitter.com/EKamchybekov" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            </div>
            <hr />
            <div className='copyright'>
                <span>&copy; 2023 - Edil Kamchybekov</span>
            </div>
        </footer>
    );
}