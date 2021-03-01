import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CrudForm from './components/crud/create/Form';
import View from './components/crud/read/View';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/view" component={View} />
            <Route path="/create" component={CrudForm} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
