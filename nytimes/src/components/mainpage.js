import React from "react"

import { fetchMain } from "../services/api"

class MainPage extends React.Component {
  constructor() {
    super()

    this.state = {
      articles:["food","foods"]
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
      <div>
        {this.state.articles.map((article, key) =>
          <div className="articleWPic">
            <img src={article.urlToImage}/>
           <a href={article.url} >{article.title}</a>
            
          </div>  
        )}
      </div>
    )
  }
}

export default MainPage