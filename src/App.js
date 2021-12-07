import * as React from 'react';
import { modules } from './config/config.js';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  loadModules() {
    let dom;
    console.log(modules);
    for (let mod in modules) {
      console.log(modules[mod].module);
      dom += React.createElement(`${modules[mod].module}`, null, null);
      // console.log(mod);
    }
    // console.log(dom);
    return dom;
  }

  constructor(props) {
    super(props);
    this.state = {
      modules: this.loadModules()
    };
  }


  render() {
    return (
      this.state.modules
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }

}

export default App;
