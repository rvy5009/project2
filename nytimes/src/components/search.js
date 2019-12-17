import React from "react"

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  
  render() {
    return (
      <div>
      
      <form onSubmit={this.props.onSubmit} onChange={this.props.onSearch}>
        <input type="text" placeholder="search News" onChange={this.props.handleChange}/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}
export default Search