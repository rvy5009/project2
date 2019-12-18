import React from "react"

class RenderSearch extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
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
                {article.description}  
                </div>
                
                {article.urlToImage && <img className="imgSearch" src={article.urlToImage} alt="pictured" />}
              </div>
            )}
          </div>
        }
    </div>
    )
  }
}
export default RenderSearch