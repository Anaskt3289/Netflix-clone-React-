import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from './Components/Banner/Banner';
import ItemsCard from './Components/ItemsCard/ItemsCard';
import {originals,action,comedy,horror,romance,documentries} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ItemsCard url={originals} title = 'Netflix Originals' />
      <ItemsCard url={action} title = 'Action Movies' isSmall />
      <ItemsCard url={comedy} title = 'Comedy Movies' isSmall />
      <ItemsCard url={horror} title = 'Horror Movies' isSmall />
      <ItemsCard url={romance} title = 'Romance Movies' isSmall />
      <ItemsCard url={documentries} title = 'Documentries' isSmall />
    </div>
  );
}

export default App;
