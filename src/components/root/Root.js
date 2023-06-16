import Footer from '../footer/Footer';
import About from "../about/About";
import Home from "../home/Home";
import { NavBar } from "../navbar/NavBar";
import Projects from "../projects/Projects";
import Contact from '../contacts/Contact'

export default function Root() {
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