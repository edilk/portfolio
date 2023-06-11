import './styles/main.css';
import Root from './components/root/Root';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> } >

  </Route>
));
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
