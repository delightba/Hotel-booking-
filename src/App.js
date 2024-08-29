
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import About from './pages/about';
import Blog from './pages/blog';
import Home from './pages/home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Pricing from './pages/pricing';
import Movies from './pages/movieDB';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='pricing' element={<Pricing/>} />
          <Route path='movieDB' element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
