import React, {Component} from 'react';
import './App.css';
import TopNav from './component/navbar';

import BreweryDB from './BrewDB.js';

class App extends Component {
    render() {
      return (
        <div className="App">
          <BreweryDB usersearch="Bill Brasher"></BreweryDB>
        </div>
      );
    }
}

export default App;

/* Original code, unhide after testing*/
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import BreweryDB from './BrewDB';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
