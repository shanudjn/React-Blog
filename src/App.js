import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';
import NotFoundpage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/article/:name" component={ArticlePage} exact/>
            <Route path="/articles-list" component={ArticlesListPage} exact/>
            <Route path="/about" component={AboutPage} exact/>
            <Route component={NotFoundpage}/>
          </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
