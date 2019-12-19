import React from "react"

class RenderSearch extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <div className="mediaSearchYes">
          <div className="inner3Page">
          {this.props.news.slice(1, 20).map((article, key) =>
            <div className="articleWordPicPage" key={key}>
              {article.urlToImage && <img className="img3Page" src={article.urlToImage} alt="pictured" />}
              <a className="title2Page" href={article.url} target="_blank"
                rel="noopener noreferrer">{article.title}</a>
              <div className="inner3PageContent">{article.content}</div>
        
            </div>
          )}
          </div>
        </div>      
        <div className="searchDiv">

          {this.props.searched &&
            <div className="outerSearch">
              {this.props.news.map((article, key) =>
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
          }
          </div>
        </div>
    )
  }
}
export default RenderSearch