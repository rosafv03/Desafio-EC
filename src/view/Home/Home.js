import './Home.css';
/* import { BodySeccion } from './Components/bodySeccion/BodySeccion'; */
/* import { Footer } from '../footerSeccion/Footer'; */
/* import { Header } from '../header/Header'; */
import { Footer } from './Components/FooterSeccion/Footer';
import { Header } from './Components/HeaderSection/Header';
import { BodySeccion } from './Components/BodySeccion/BodySeccion';

function Home() {
  return (
    <div className="App">
      <header className='App__header'>
        <Header/>
      </header>

      <section className='App__conten'>
        <BodySeccion/>
      </section>

      <footer className='App__footer'>
        <Footer/>
      </footer>

    </div>
  );
}

export default Home;
