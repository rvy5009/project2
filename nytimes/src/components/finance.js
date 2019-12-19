import React from "react"

import { fetchFinance } from "../services/api"

class Finance extends React.Component {
  constructor() {
    super()

    this.state = {
      articles:[]
    }
  }

  async componentDidMount() {
    const data = await fetchFinance()
    console.log(data)
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
            <h2 className= "h2Page" >Finance</h2>
            <div className="outerPage">
              <div className=" inner1Page">
              {this.state.articles.slice(0, 1).map((article, key) =>
                <div className="articleWPicPage" key={key}>
                  {article.urlToImage && <img className="imgPage" src={article.urlToImage} alt="pictured" />}
                  <div className="art1Page">
                    <a className="titlePage" href={article.url} target="_blank"
                        rel="noopener noreferrer" >{article.title}</a>
                    <p className="bulletPage">{article.content}</p>
                  </div>

                </div>
              )}
              </div>
                <div className=" inner2Page">
                {this.state.articles.slice(1, 4).map((article, key) =>
                  <div className="articleWordPage" key={key}>
                    {article.urlToImage && <img className="img2Page" src={article.urlToImage} alt="pictured" />}
                    <a className="title2Page" href={article.url} target="_blank"
                        rel="noopener noreferrer">{article.title}</a>
                    {article.author && <p className="authorPage">By {article.author}</p>}
                  </div>
                )}
                </div>
            </div>
            <div>
              <div className="inner3Page">
              {this.state.articles.slice(5, 10).map((article, key) =>
                <div className="articleWordPicPage" key={key}>
                  {article.urlToImage && <img className="img3Page" src={article.urlToImage} alt="pictured" />}
                  <a className="title2Page" href={article.url} target="_blank"
                    rel="noopener noreferrer">{article.title}</a>
                  <div className="inner3PageContent">{article.content}</div>
            
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

export default Finance