
import Home from "../home/Home";
import { NavBar } from "../navbar/NavBar";

export default function Root() {
    return (
        <>
            <NavBar />
            <main>
                <Home />
            </main>
        </>
    );
}