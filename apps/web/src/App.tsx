import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button } from 'ui';
import { DatePicker } from '@mantine/dates';
import { Tmp } from './Tmp';
import { TestTypes } from 'types';
// import { TestTypes } from 'types';

function App() {
  const [count, setCount] = useState(0);
  const test: string = 'testsetes';

  const t: TestTypes = { prop: 'test' };
  console.log(t);

  return (
    <div className="App">
      <DatePicker placeholder="Pick date" label="Event date" withAsterisk />
      <Tmp />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
