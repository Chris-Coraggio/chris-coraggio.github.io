import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Illustrations } from './components/Illustrations';
import { About } from './components/About';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Modal from 'react-modal';

enum Tab {
  Illustrations,
  About,
  Writing,
  Contact
}

Modal.setAppElement('#root');

export const App = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.Illustrations);
  const tabNames = Object.keys(Tab).filter(key => isNaN(parseInt(key)))
  return (
    <>
      <Header />
      {/* <div className="NavBar">
        <div className="NavBar--Tabs">
          {tabNames.map(tab => (
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedTab(Tab[tab as keyof typeof Tab]) }}>
              <h2 className="NavBar--Tab">{tab}</h2>
            </a>
          ))}
        </div>
      </div> */}
      <Illustrations />
      <About />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;