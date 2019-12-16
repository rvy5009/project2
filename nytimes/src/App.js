import React from 'react';
import './App.css';
import MainPage from "./components/mainpage"
import Sports from "./components/sports"
import { Route, Link } from "react-router-dom"
import Finance from "./components/finance"
import World from "./components/world"
import Header from "./components/header"

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount(){
    return(<MainPage/>)
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="navDiv">
          <nav>
            <Link to="/">HomePage</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/finance">Finance</Link>
            <Link to="/world">World</Link>
          </nav>
        </div>
        <main>
          <Route exact path="/" render={() => <MainPage/>}/ >
          <Route path="/sports" render={() => <Sports/>}/ >
          <Route path="/finance" render={() => <Finance/>}/ >
          <Route path="/world" render={() =><World />}/>
        </main>
        

      </div>
    );
  }
}

export default App;
