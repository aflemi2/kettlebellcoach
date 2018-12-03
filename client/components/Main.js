import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';


class Main extends React.Component {

  render() {
    
    return (
      <HashRouter>
        <div>
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={ Home } />
              </Switch>
            </div>
        </div>
      </HashRouter>
    )
  }
}

// const mapState = null;

// const mapDispatch = dispatch => ({
//   fetch() {
//     dispatch(getMantras());
//     dispatch(getMandalas());
//   }
// });

export default Main;