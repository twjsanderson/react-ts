import { useState } from 'react';
import Todos from './components/Todos';
import ShowImages from './components/ShowImages';
import './index.css';

const App = () => {
  const [toggleImages, setToggleImages] = useState(false);
  const [appName, setAppName] = useState('Show Images');

  const changeApp = () => {
    setToggleImages(!toggleImages);
    setAppName(appName === 'Show Images' ? 'Show Todos' : 'Show Images')
  }

  return (
    <>
      <button 
        className='btn btn-blue'
        onClick={changeApp}
      >
        {appName}
      </button>
      {
        toggleImages ?
          <ShowImages /> :
            <Todos />
      }
    </>
  );
}

export default App;
