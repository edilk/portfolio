
import About from "../about/About";
import Home from "../home/Home";
import { NavBar } from "../navbar/NavBar";
import Projects from "../projects/Projects";
import Contacts from '../contacts/Contacts'

export default function Root() {
    return (
        <>
            <NavBar />
            <main>
                <Home />
                <About />
                <Projects />
                <Contacts />
            </main>
        </>
    );
}