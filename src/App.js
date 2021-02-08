import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Contacts from './Contacts.js';
import Store from './Store.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contacts" component={Contacts} />
        <Route path="/store" component={Store} />
      </Switch>
    </div>
  );
}

export default App;
