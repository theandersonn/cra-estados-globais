import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/HomeContainer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;