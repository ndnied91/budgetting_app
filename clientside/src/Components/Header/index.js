import React from 'react'


import './style.css'


class Header extends React.Component{

  constructor(props) {
      super(props);
          this.state = { menu: false , closeNav: false}
    }

  render(){

    return(
      <div className="header">
          <div>
            Header
             
          </div>
      </div>

    )
  }
}




export default Header
