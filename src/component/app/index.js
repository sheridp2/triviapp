import React from 'react';
import Landing from '../landing';
import Dashboard from '../dashboard';
import axios from 'axios';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/play" component={Dashboard} question={this.state}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
