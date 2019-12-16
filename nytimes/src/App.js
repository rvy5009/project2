import React from 'react';
import './App.css';
import MainPage from "./components/mainpage"
import Sports from "./components/sports"
import { Route, Link } from "react-router-dom"
import Finance from "./components/finance"
import World from "./components/world"

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
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/finance">Finace</Link>
          <Link to="/world">World</Link>
        </nav>
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
