import './App.css';
import React, { Component } from 'react';
import About from './components/About';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (
    <div className='App'>

    <About/>
    </div>
    );
    }
    }
    export default App;