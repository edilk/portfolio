import './styles/main.css';
import Root from './components/root/Root';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contacts/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> } >
    <Route path='/' element={ <Home /> } />
    <Route path='about' element={<About /> } />
    <Route path='projects' element={ <Projects /> } />
    <Route path='skills' element={ <Skills /> } />
    <Route path='contact' element={ <Contact />} />
  </Route>
));
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
