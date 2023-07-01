import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Details from './pages/details';
import Add from './pages/add';
import About from './pages/about';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/details/:city" element={<Details />} />
        <Route path="/add" element={<Add />} />
        <Route path="/about" element={<About />} />
      </Route>,
    ),
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
