import React from "react"

import { fetchMain } from "../services/api"

class MainPage extends React.Component {
  constructor() {
    super()

    this.state = {
      articles:[]
    }
  }

  async componentDidMount() {
    const data = await fetchMain()
    let newData = data.data.articles
    this.setState({
      articles: newData
    })
  }

  render() {
    console.log(this.state.articles)
    return (
      <div className="outer">
        <div className=" innerOne">
          {this.state.articles.slice(0,1).map((article, key) =>
            <div className="articleWPic" key={key}>
              <div className="artOne">
                <a href={article.url} >{article.title}</a>
                <p className = "bullet">{article.description}</p>
              </div>
              <img className = "imgMain" src={article.urlToImage} alt="pictured"/>
            </div>  
            )}
        </div>

        <div className=" innerTwo">
        {this.state.articles.slice(1,2).map((article, key) =>
          <div className="articleWord" key={key}>
           <a href={article.url} >{article.title}</a>
           <p>{article.description}</p>
          </div>  
          )}    
        </div>  
      </div>
    )
  }
}

export default MainPage