import React from "react"

class Hamburger extends React.Component{
  render() {
    return (
      <div class="topnav">
      sadfasdf
      <div id="myLinks">
<a href="/" class="active">Homepage</a>        
<a href="/sports">Sports</a>
<a href="/finance">Finance</a>
<a href="/world">World</a>
      </div>
      <a href="javascript:void(0);" class="icon" onClick={this.props.myFunction}>
<i class="fa fa-bars"></i>
</a>
</div>
    )
  }
}

export default Hamburger