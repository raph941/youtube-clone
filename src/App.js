import React from 'react';
// import 'bootstrap/dist/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SearchPage from './components/SearchPage'
import RecommendedVideos from './components/RecommendedVideos'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        {/* this would be always rendered, on all routess */}
          <Header />
        {/* ends */}

        <Switch>

          <Route path="/search/:searchTerm">
            <div className="app__page d-flex" >
                <Sidebar />
                <SearchPage />
            </div>
          </Route>

          <Route path="/">
              <div className="app__page d-flex" >
                <Sidebar />
                <RecommendedVideos />
              </div>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
