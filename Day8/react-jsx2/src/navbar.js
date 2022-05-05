import React from 'react'
import './App.css';


class NavbarComponent extends React.Component {
    render() {
        return (
        <div >
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <img class="navbar-brand" src = "https://github.com/panotza/pikkanode/blob/master/pikkanode.png?raw=true" width="150px" alt="Pikkanode" />
  

  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="g">Create pikka</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="g">Sign Up</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="g">Sign In</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="g">Sign Out</a>
    </li>
  </ul>
</nav>
        </div>
        );
    }
}

export default NavbarComponent;