import React from "react"

class Hamburger extends React.Component{
  render() {
    return (
      <div>
                  <a href="javascript:void(0);" class="icon" onClick={this.props.myFunction}>
          <i class="fa fa-bars"></i>
          </a>

        </div>
    )
  }
}

export default Hamburger