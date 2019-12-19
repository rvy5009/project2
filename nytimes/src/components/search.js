import React from "react"

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  
  render() {
    return (
      <div className="searchInput"> 
      
      <form onSubmit={this.props.onSubmit} >
        <input type="text" placeholder="search News" onChange={this.props.handleChange}/>
        <input type="submit" onChange={this.props.onSearch}/>
        </form>
      </div>
    )
  }
}
export default Search