import React from 'react';
import {Prompt} from "react-router-dom";
import "../styles/Contact.css"

class Contact extends React.Component {
  state = {
    value: "",
    confirm: false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: '',
      confirm: true
    })
  }
  handleChange = e =>{
    this.setState({
      value: e.target.value
    })
  }
  render(){
  return ( 
    <div>
       <h3 className="form-title">Napisz do nas!</h3>
    <form onSubmit={this.handleSubmit}>
      <textarea value={this.state.value} onChange={this.handleChange}></textarea>
      <button>Wyślij</button>
    </form>
    <Prompt 
      when={this.state.value}
      message="Masz niewypełniony formularz, czy na pewno chcesz opuśić tę stronę?"
    />
    {this.state.confirm && <p>Wiadomość została wysłana, dziękujemy! </p>}
    </div>
    );
}
}
 
export default Contact;