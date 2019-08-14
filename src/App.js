import React from 'react';
import logo from './logo.svg';
import './App.css';
import utils from './utils.js';
import { Dropdown } from 'semantic-ui-react';

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
]

function handleOnChange(event, data) {
  console.log(event, data.value)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {utils.testSum(1, 3)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dropdown
          placeholder='Please select'
          fluid
          selection
          options={countryOptions}
          onChange={handleOnChange}
        />
      </header>
    </div>
  );
}

export default App;
