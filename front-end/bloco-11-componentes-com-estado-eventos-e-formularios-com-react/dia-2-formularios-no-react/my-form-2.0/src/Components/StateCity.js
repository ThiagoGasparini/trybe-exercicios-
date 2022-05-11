import React from 'react';

const states = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class stateCity extends React.Component {
  render() {
    const { stateCity, handleChange } = this.props;
    return (
      <label htmlFor='city'>
        Estado:
        <select
          name='stateCity'
          required
          onChange={handleChange}
          defaultValue=''
          value={stateCity}
        >
          <option value=''>Selecione</option>
          {states.map((value, key) => (
            <option key={key}>{value}</option>
          ))}
        </select>
      </label>
    );
  }
}
export default stateCity;
