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
    return (
      <div className ="outer">
        {this.state.articles.slice(0,2).map((article, key) =>
          <div className="articleWPic">
            <img src={article.urlToImage}/>
           <a href={article.url} >{article.title}</a>
           <p>{article.description}</p>
          </div>  
        )}
      </div>
    )
  }
}

export default MainPage