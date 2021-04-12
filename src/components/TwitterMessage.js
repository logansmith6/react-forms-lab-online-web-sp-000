import React from "react";


class TwitterMessage extends React.Component {
  state = {
    message: '',
    submittedData: [],
    maxChars: 280
  }
  
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
    this.setState(previousState => {
      return {
      maxChars: previousState.maxChars - 1
      }
    })
   
  }

  handleSubmit = event => {
    
    let formData = { message: this.state.message }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }
 

  render() {
    return (
      <div>
       
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}
            onSubmit={event => this.handleSubmit(event)}></input>
            {this.state.maxChars}
           
      </div>
    );
  }
}

export default TwitterMessage;
