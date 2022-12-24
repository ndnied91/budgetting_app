import React from 'react'

import { connect } from 'react-redux'
import './style.css'


class MainView extends React.Component{

  render(){


    return(
      <div className="header">
          <div> {this.props.values.totalIncome} </div>
          <div> {this.props.values.expenses} </div>
        </div>
    )
  }
}



const mapStateToProps = (state) => {
  // console.log(state)
  return { values: state.userValues }
}

export default connect( mapStateToProps, null  )(MainView)
