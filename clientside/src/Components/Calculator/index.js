import React from 'react'

import { connect } from 'react-redux'
import './style.css'

import { updateCalc } from '../../actions'

class Calculator extends React.Component{
  constructor(props){
      super(props)

        this.state = { totalIncome: 0  , expenses: 0  , saving: 0};
        this.onInputchange = this.onInputchange.bind(this);
  }

  onInputchange(event) {
     this.setState({ [event.target.name]: event.target.value });
   }




  render(){

    const handleSubmit = event => {
       event.preventDefault();
       this.props.updateCalc(this.state) //save on redux
     };


    return(
      <div className="header">

              <div>
               <form onSubmit={handleSubmit}>
               <label> Total Income</label>
               <input className="form-control" style={{height: '25px'}} name="title" type="text"  placeholder="Total Income" value={this.state.totalIncome} onChange={this.onInputchange} required />
               <label> Expenses</label>
               <input className="form-control" style={{height: '25px'}} name="name" type="text"  placeholder="Expenses" value={this.state.expenses} onChange={this.onInputchange} required />
               <label>How much do you want to save</label>
               <input className="form-control" style={{height: '25px'}} name="name" type="text"  placeholder="How much to save" value={this.state.saving} onChange={this.onInputchange} required />




                 <button type="submit">Submit</button>
               </form>
             </div>
          </div>
    )
  }
}



const mapStateToProps = (state) => {
  console.log(state)
  return { test: state.test }
}

export default connect( mapStateToProps, { updateCalc }  )(Calculator)
