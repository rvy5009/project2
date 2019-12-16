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
        {!this.props.search &&
          <div>
            <h2 className= "h2Page" >Sports</h2>
            <div className="outerPage">
            <div className=" inner1Page">
            {this.state.articles.slice(0, 1).map((article, key) =>
              <div className="articleWPicPage" key={key}>
                <img className="imgPage" src={article.urlToImage} alt="pictured" />
                <div className="art1Page">
                  <a className="titlePage" href={article.url} >{article.title}</a>
                  <p className="bulletPage">{article.content}</p>
                </div>

              </div>
            )}
          </div>
          <div className=" inner2Page">
            {this.state.articles.slice(1, 4).map((article, key) =>
              <div className="articleWordPage" key={key}>
                {article.urlToImage && <img className="img2Page" src={article.urlToImage} alt="pictured" />}
                <a className="title2Page" href={article.url} >{article.title}</a>
                <p className="authorPage">By {article.author}</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="inner3Page">
            {this.state.articles.slice(5, 10).map((article, key) =>
              <div className="articleWordPicPage" key={key}>
                {article.urlToImage && <img className="img3Page" src={article.urlToImage} alt="pictured" />}
                <a className="title2Page" href={article.url} >{article.title}</a>
          
              </div>
            )}
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default Sports