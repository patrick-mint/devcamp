import React from 'react';
import './App.css';
import Navbar from './navbar'
import PictureCardComponent from './picturecard'
import FooterComponent from './footer'

class App extends React.Component {
  render(){
  return (
  <div>
  <Navbar/>
  <PictureCardComponent/>
  <FooterComponent/>

  </div>
  )
}
}
export default App;
