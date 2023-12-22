// import logo from './logo.svg';
// import './App.css';

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

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AgentDashboard from "./components/AgentDashboard";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* You can add a header or navigation bar here if needed */}

        <Switch>
          <Route exact path="/" component={AgentDashboard} />
          {/* Add more routes for different components/screens if necessary */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
