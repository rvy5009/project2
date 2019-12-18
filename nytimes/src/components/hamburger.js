import React from "react"

class Hamburger extends React.Component{
  render() {
    return (
      <div>
        <a href="#nowhere" className="icon" onClick={this.props.myFunction}>
        <i className="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}

export default Hamburger