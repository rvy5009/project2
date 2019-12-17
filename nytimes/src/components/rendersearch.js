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
      
        {this.props.searched &&
          <div className="outerSearch">
            {this.props.news.map((article, key) =>
              <div className="innerSerach" key={key}>
                <div className="search">
                  <a
                    className="title"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer" >
                    {article.title}
                  </a>
                  
                </div>
                {article.description}
                {article.urlToImage && <img className="img2Page" src={article.urlToImage} alt="pictured" />}
              </div>
            )}
          </div>
        }
    </div>
    )
  }
}
export default RenderSearch