import * as React from 'react';

interface DataObject {
  id: number;
  text: {
    name: string;
    thing?: number;
  };
}

interface DataArray extends Array<DataObject> {}

const App = () => {
  const data: DataArray = [
    {
      id: 1,
      text: {
        name: 'tom'
      }
    }
  ]
  return (
    <div className='flex flex-col'>
      <h1>Test</h1>
      {
        data.map(item => {
          return <p key={item.id}>{item.text.name}</p>
        })
      }
      <p>butts</p>
    </div>
  );
}

export default App;
