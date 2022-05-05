import React from 'react';
import './App.css';
import HeaderComponent from './Header'
import ContentComponent from './Content'
import FooterComponent from './Footer'

class App extends React.Component {
  render(){
  return (
  <div>
  <HeaderComponent/>
  <ContentComponent />
  <FooterComponent />
  </div>
  )
}
}
export default App;
