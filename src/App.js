import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from "./components/pages/Homepage";
import LoginPage from "./components/pages/LoginPage";

const App = () => <div>
  <Route path="/" exact component={Homepage} />
  <Route path="/login" exact component={LoginPage} />
</div>;

export default App;
