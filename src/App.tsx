import './App.css';
import { Header } from './components/Header';
import { Illustrations } from './components/Illustrations';
import { About } from './components/About';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Illustrations />
      <About />
      <Writing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;