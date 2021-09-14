import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Costumer } from './container/Pages/Costumer';
import { Company } from './container/Pages/Company';
import { members } from './container/Members.js'
import { Home } from './container/Pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/'>
            <Home members={members}></Home>
          </Route>
          <Route exact path="/costumer/:id">
            <Costumer members={members}></Costumer>
          </Route>
          <Route exact path='/company/:id'>
           <Company members={members}></Company>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
