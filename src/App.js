import './styles/main.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';

export default function App() {

	return (
    	<>
			<NavBar />
			<main>
				<Home />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
    	</>
  );
}
