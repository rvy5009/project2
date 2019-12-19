import React from "react"

class Hamburger extends React.Component{
  render() {
    return (
      <div className="hamburger">
        <a href="#nowhere" className="icon" onClick={this.props.hamburger} onMouseEnter={this.props.onMouseEnter}>
        <i className="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}

export default Hamburger