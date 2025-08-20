// App.jsx
import './App.css';
import './index.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from './components/Services/Services';
import Rooms from './components/Room/Room';
import Aminities from './components/Aminities/Aminities';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      <Rooms />
      <Aminities />
      <Testimonials />
    </>
  )
}


export default App;