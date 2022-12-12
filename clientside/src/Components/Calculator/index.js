import React from 'react'

import { connect } from 'react-redux'
import './style.css'

import { firstTest } from '../../actions'

class Calculator extends React.Component{
  constructor(props){
      super(props)

        this.state = { title: ''  , name: ''  };
        this.onInputchange = this.onInputchange.bind(this);
  }

  onInputchange(event) {
     this.setState({ [event.target.name]: event.target.value });
   }




  render(){

    const handleSubmit = event => {
       event.preventDefault();

       console.log(this.state.title)
       console.log(this.state.name)

       this.props.firstTest(this.state)
     };


    return(
      <div className="header">

              <div>
               <form onSubmit={handleSubmit}>
               <input className="form-control" style={{height: '25px'}} name="title" type="text"  placeholder="Enter a title" value={this.state.title} onChange={this.onInputchange} required />
               <input className="form-control" style={{height: '25px'}} name="name" type="text"  placeholder="Enter a name" value={this.state.name} onChange={this.onInputchange} required />

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

export default connect( mapStateToProps, {firstTest}  )(Calculator)
