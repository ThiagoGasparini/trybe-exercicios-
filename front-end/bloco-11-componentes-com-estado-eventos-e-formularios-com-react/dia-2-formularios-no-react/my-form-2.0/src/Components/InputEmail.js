import React from 'react';

class InputEmail extends React.Component {
  render() {
    const { email, handleChange } = this.props;
    return (
      <label htmlFor='email'>
          Email:
          <input
            type='email'
            name='email'
            maxlength='50'
            onChange={handleChange}
            required
            value={ email }
          />
        </label>
    )
  }
}
export default InputEmail