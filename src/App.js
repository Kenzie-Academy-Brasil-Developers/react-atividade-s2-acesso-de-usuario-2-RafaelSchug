import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Costumer } from './container/Pages/Costumer';
import { Company } from './container/Pages/Company';
import { members } from './container/Members.js';
import { Home } from './container/Pages/Home';
import { Form } from './container/Form';
import { useState } from 'react';



function App() {

  const [editableMembers, setEditableMembers] = useState(members);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/'>
            <Home members={editableMembers}></Home>
          </Route>
          <Route exact path="/costumer/:id">
            <Costumer members={editableMembers}></Costumer>
          </Route>
          <Route exact path='/company/:id'>
           <Company members={editableMembers}></Company>
          </Route>
          <Route exact path='/form'>
           <Form members={editableMembers} setEditableMembers={setEditableMembers}></Form>
          </Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
