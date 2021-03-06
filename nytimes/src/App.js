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
import RenderSearch from "./components/rendersearch"
import { search } from "./services/api"
import Hamburger from './components/hamburger';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      news: [],
      searchPage: false
    }
  }
  onSubmit = async (e) => {
    e.preventDefault()
    const data = await search(this.state.input)
    const newData = data.data.articles
    this.setState({
      news: newData
    })
    this.onSearch();
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  componentDidMount() {
    return (<MainPage />)
  }

  onSearch = () => {
    this.setState({
      searchPage: true
    })
  }
  onFalseClick = () => {
    this.setState({
      searchPage: false
    })
  }
  
  // got code from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
  hamburger() {
    var ham = document.getElementById("myLinks");
    if (ham.style.display === "block") {
      ham.style.display = "none";
    } else {
      ham.style.display = "block";
    }
  }
  mouseOut() {
    let mice = document.getElementById("myLinks")
    mice.style.display = "none"
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Hamburger hamburger={this.hamburger} onMouseEnter={this.mouseEnter} />
        <div className="navDiv">
            <Search onSearch={this.onSearch}
              onSubmit={this.onSubmit}
              handleChange={this.handleChange}
              searched={this.state.searchPage} />
          <nav>

            <Link to="/" onClick={this.onFalseClick}>HomePage</Link>
            <Link to="/sports" onClick={this.onFalseClick}>Sports</Link>
            <Link to="/finance" onClick={this.onFalseClick}>Finance</Link>
            <Link to="/world" onClick={this.onFalseClick}>World</Link>
          </nav>

          <div className="topnav" id="topnav" onMouseLeave={this.mouseOut}>
            <div id="myLinks" onChange={this.handler}>
              <a href="/" className="active">Homepage</a>
              <a href="/sports">Sports</a>
              <a href="/finance">Finance</a>
              <a href="/world">World</a>
            </div>
          </div>

        </div>

        <Daily search={this.state.searchPage} />
        <RenderSearch
          searched={this.state.searchPage}
          news={this.state.news}
        />
        <main>

          <Route exact path="/" render={() => <MainPage search={this.state.searchPage} />} />
          <Route path="/sports" render={() => <Sports search={this.state.searchPage} />} />
          <Route path="/finance" render={() => <Finance search={this.state.searchPage} />} />
          <Route path="/world" render={() => <World search={this.state.searchPage} />} />
        </main>

      </div>
    );
  }
}

export default App;
