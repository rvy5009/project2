import React from "react"

import { fetchDaily } from "../services/api"

class Daily extends React.Component {
  constructor() {
    super()

    this.state = {
      articles:[]
    }
  }

  async componentDidMount() {
    const data = await fetchDaily()
    let newData = data.data.articles
    this.setState({
      articles: newData
    })
  }

  render() {
    return (
      <div className="outestDaily">
        {!this.props.search &&
          <div>
            <div className="outerDaily">
              <div className=" inner1Daily">
              {this.state.articles.slice(0, 3).map((article, key) =>
                <div className="articleWPicDaily" key={key}>
                  {article.urlToImage && <img className="imgDaily" src={article.urlToImage} alt="pictured" />}
                  <div className="art1Daily">
                    <a className="titleDaily" href={article.url} >{article.title}</a>  
                  </div>
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

export default Daily