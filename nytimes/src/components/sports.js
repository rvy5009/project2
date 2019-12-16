import React from "react"

import { fetchSports } from "../services/api"

class Sports extends React.Component {
  constructor() {
    super()

    this.state = {
      articles:[]
    }
  }

  async componentDidMount() {
    const data = await fetchSports()
    let newData = data.data.articles
    this.setState({
      articles: newData
    })
  }

  render() {
    return (
      <div>
        <h2>Sports</h2>
      <div className="outerPage">
        <div className=" innerOnePage">
          {this.state.articles.slice(0,1).map((article, key) =>
            <div className="articleWPicPage" key={key}>
              <img className= "imgPage" src={article.urlToImage} alt="pictured"/>
              <div className="artOnePage">
                <a className= "titlePage" href={article.url} >{article.title}</a>
                <p className = "bulletPage">{article.description}</p>
              </div>

            </div>  
            )}
        </div>

        <div className=" innerTwoPage">
        {this.state.articles.slice(1,4).map((article, key) =>
          <div className="articleWordPage" key={key}>
            <img className= "img2Page" src={article.urlToImage} alt="pictured"/>
            <a href={article.url} >{article.title}</a>
            
          </div>  
          )}    
        </div>  
        </div>
      </div>
    )
  }
}

export default Sports