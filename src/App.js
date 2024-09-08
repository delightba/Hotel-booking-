
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import About from './pages/about';
import Blog from './pages/blog';
import Home from './pages/home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Pricing from './pages/pricing';
import Example from './components/test';
import CarouselFadeExample from './components/test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='pricing' element={<Pricing/>} />
          <Route path='test' element={<CarouselFadeExample/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
