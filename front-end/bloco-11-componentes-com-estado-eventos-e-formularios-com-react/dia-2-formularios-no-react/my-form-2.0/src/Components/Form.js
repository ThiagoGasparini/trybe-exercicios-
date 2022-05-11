import React from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import StateCity from './StateCity';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    stateCity: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  clearButton = () => {
    this.setState({
      name: '',
      email: '',
      stateCity: '',
    });
  };

  render() {
    const { name, email, stateCity } = this.state;

    return (
      <form>
        <InputName name={name} handleChange={this.handleChange} />
        <InputEmail name={email} handleChange={this.handleChange} />
        <StateCity name={stateCity} handleChange={this.handleChange} />
        <button type='reset' onClick={this.clearButton}>Limpar</button>
      </form>
    );
  }
}
export default Form;
