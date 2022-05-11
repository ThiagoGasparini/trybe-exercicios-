import React from 'react';

class InputName extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor='name'>
          Nome:
          <input
            type='text'
            name='name'
            maxlength='40'
            onChange={handleChange}
            required
            value={ name }
          />
        </label>
    )
  }
}
export default InputName