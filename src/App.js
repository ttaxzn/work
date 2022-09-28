import './App.css';
import logo from './logo1.svg'
import React from 'react'
document.body.style = 'background: #554348;';

function App() {
  return (
    <div>
      <div class="navbar">
      <div class="logo">
      <img src={logo} alt="" width="150px" height="150px"/>
      </div>

      <div class="nav1">
        <div>
          HOME
        </div>

        <div>
          ABOUT
        </div>

        <div>
          CONTACT
        </div>

      </div>

      </div>
    <div class="namebox">

      <div class="name">
        TEA ABUSELIDZE
      </div>

      <div class="description">
        Software Engineer and Front End Developer
      </div>

    </div>
    
    </div>
  );
}

export default App;
