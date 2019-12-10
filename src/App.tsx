import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './resources/css/index.css';
import BlogWritePage from './pages/BlogWritePage';
import MainPage from './pages/MainPage';
import PrdListPage from './pages/PrdListPage';
const App: React.FC = () => {
 
  return (
      <div id="app">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/prod" exact component={PrdListPage} />
            <Route path="/blog" exact component={BlogWritePage} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
