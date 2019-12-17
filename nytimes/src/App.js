import React from 'react';
import './App.css';
import MainPage from "./components/mainpage"
import Sports from "./components/sports"
import { Route, Link } from "react-router-dom"
import Finance from "./components/finance"
import World from "./components/world"
import Header from "./components/header"
import Search from "./components/search"
import Daily from './components/daily'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchPage: false
    }
  }

  componentDidMount() {
    return (<MainPage />)
  }

  onSearch = () => {
    this.setState({
      searchPage:true
    })
  }
  onFalseClick= () => {
    this.setState({
      searchPage:false
    })
  }

  render() {
    return (
      <div className="App">

        <Header />
        

        <div className="navDiv">
          <nav>
            <Search onSearch={this.onSearch} searched={this.state.searchPage}/>
            <Link to="/" onClick={this.onFalseClick}>HomePage</Link>
            <Link to="/sports" onClick={this.onFalseClick}>Sports</Link>
            <Link to="/finance" onClick={this.onFalseClick}>Finance</Link>
            <Link to="/world" onClick={this.onFalseClick}>World</Link>

          </nav>
        </div>
        <Daily search={this.state.searchPage} />
        
        <main>

          <Route exact path="/" render={() => <MainPage search={this.state.searchPage} />} />
          <Route path="/sports" render={() => <Sports search={this.state.searchPage}/>} />
          <Route path="/finance" render={() => <Finance search={this.state.searchPage}/>} />
          <Route path="/world" render={() => <World search={this.state.searchPage}/>} />
        </main>


      </div>
    );
  }
}

export default App;
