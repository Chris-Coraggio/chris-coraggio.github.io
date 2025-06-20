import './App.scss';
import Modal from 'react-modal';
import { Illustrations } from './components/Illustrations';
import { About } from './components/About';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

Modal.setAppElement('#root');

export const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Writing />
      <Illustrations />
      {/* <Books /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;