import React from 'react'

import { connect } from 'react-redux'
import './style.css'

import { updateUserValues } from '../../actions'


import ExpensesTable from '../TableView/ExpensesTable'

class InputForm extends React.Component{
  constructor(props){
      super(props)

        this.state = { totalIncome: ''  ,  saving: ''};
        this.onInputchange = this.onInputchange.bind(this);
  }

  onInputchange(event) {

    console.log(event.target.name)
    console.log(event.target.value)
     this.setState({ [event.target.name]: event.target.value });
   }



  render(){

    const handleSubmit = event => {
       event.preventDefault();
       this.props.updateUserValues(this.state) 
     };


    return(
      <div className="header">

              <div>
               <form onSubmit={handleSubmit}>
               <label> Total Income</label>
               <input className="form-control" style={{height: '25px'}} name="totalIncome" type="text"  placeholder="Total Income" value={this.state.totalIncome} onChange={this.onInputchange} required />
               <label>How much do you want to save</label>
               <input className="form-control" style={{height: '25px'}} name="saving" type="text"  placeholder="How much to save" value={this.state.saving} onChange={this.onInputchange} required />
                 <button type="submit">Submit</button>
               </form>
             </div>




              <ExpensesTable/>

          </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { }
}

export default connect( mapStateToProps, { updateUserValues }  )(InputForm)
