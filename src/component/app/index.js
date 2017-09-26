import React from 'react';
import Landing from '../landing';
import Dashboard from '../dashboard';
import axios from 'axios';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/play" component={Dashboard} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
