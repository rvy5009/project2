import React from "react"

let date = new Date()
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const Header = () => {
  return (
    <div>
      
      <h1>The New York Times</h1>
      <p className="date"> {days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
    </div>
  )
}
export default Header