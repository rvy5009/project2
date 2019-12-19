import React from "react"

import { fetchMain } from "../services/api"

class MainPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
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
    // console.log(this.state.articles)
    return (
      
      <div>
        {!this.props.search &&
          <div>
            <div className="outer">
              <div className=" inner1">
                {this.state.articles.slice(0, 1).map((article, key) =>
                  <div className="articleWPic" key={key}>
                    <div className="art1">
                      <a
                        className="title"
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer" >
                        {article.title}
                      </a>
                      <p className="bullet">{article.description}</p>
                    </div>
                    {article.urlToImage && <img className="imgMain" src={article.urlToImage} alt="pictured" />}
                  </div>
                )}
              </div>

              <div className=" inner2">
                {this.state.articles.slice(1, 2).map((article, key) =>
                  <div className="articleWord" key={key}>
                    <a
                      className="title"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {article.title}
                    </a>
                    <p>{article.description}</p>
                  </div>
                )}
              </div>

            </div>
            <div className=" inner3">
              {this.state.articles.slice(7, 8).map((article, key) =>
                <div className="article3Word" key={key}>
                  <div className="inner3Text">
                    <a
                      className="title"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {article.title}
                    </a>
                    <p>{article.description}</p>
                  </div>
                  {article.urlToImage &&
                    <img
                      className="img3Main"
                      src={article.urlToImage}
                      alt="pictured"
                    />}
                </div>
            )}
            


          </div>
          <div className="outerSearch">
            {this.state.articles.slice(9,20).map((article, key) =>
              <div className="innerSearch" key={key}>
                <div className="search">
                  <a
                    className="title"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer" >
                    {article.title}
                  </a><br></br>

                  <p className="searchDes">{article.description}</p>  
                </div>
                
                {article.urlToImage && <img className="imgSearch" src={article.urlToImage} alt="pictured" />}
              </div>
            )}
            </div>          
          </div>
        }
      </div>
    )
  }
}

export default MainPage