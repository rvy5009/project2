import React from "react"
import { search } from "../services/api"

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      news: []
    }
  }
  onSubmit = async (e) => {
    e.preventDefault()
    const data = await search(this.state.input)
    const newData = data.data.articles
    this.setState({
      news:newData
    })
    this.props.onSearch();
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    console.log(this.state.news)
    return (
      <div>
      
      <form onSubmit={this.onSubmit} >
        <input type="text" placeholder="search News" onChange={this.handleChange}/>
        <input type="submit"/>



      </form>
        {this.props.searched &&
        <div>
          {this.state.news.map((article, key) =>
              <div key={key}>
                {article.title}
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}
export default Search