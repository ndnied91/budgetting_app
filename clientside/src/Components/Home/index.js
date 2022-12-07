import React from 'react'


import './style.css'

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
