import React from 'react'


import './style.css'


import Calculator from "../Calculator"

class Home extends React.Component{

  constructor(props) {
      super(props);
          this.state = { menu: false , closeNav: false}
    }

  render(){

    return(
      <div className="header">
          <div>
            HOME PAGE
          </div>
      </div>

    )
  }
}




export default Home
