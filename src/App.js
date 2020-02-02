import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CollectionPage from './pages/collection/collection-page.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={CollectionPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
