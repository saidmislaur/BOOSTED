import './App.scss';
import Brand from './components/brands';
import Example from './components/example';
import Footer from './components/footer';
import Gallery from './components/gallery';
import Header from './components/header';
import Info from './components/info';
import Perfomance from './components/perfomance';
import Products from './components/products';
import Reviews from './components/reviews';
import Video from './components/video';

function App() {
  return (
    <div className="App">
      <Header />
      <Brand />  
      <Info /> 
      <Perfomance />
      <Example />
      <Gallery />
      <Video />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
