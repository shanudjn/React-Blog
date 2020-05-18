import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
          <Route path="/" component={HomePage} exact/>
          <Route path="/article" component={ArticlePage} exact/>
          <Route path="/articles-list" component={ArticlesList} exact/>
          <Route path="/about" component={AboutPage} exact/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
