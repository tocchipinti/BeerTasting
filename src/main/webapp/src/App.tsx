import React from 'react';
import './App.css';
import { Link, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Home from './components/home';
import { Recommendation } from './components/car/recommendation';
import { Create } from './components/car/create';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>
            <li>
              <Link to={'/create'}> Add Car </Link>
            </li>
            <li>
              <Link to={'/recommendation'}> Make Recommendation </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/create'} exact component={Create} />
          <Route path={'/recommendation'} exact component={Recommendation} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
