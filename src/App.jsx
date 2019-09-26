import React, { useState } from 'react';
import ImagesList from './containers/ImagesList/ImagesList';

import './App.css';

const App = () => {
  const [columnsCount, setColumnsCount] = useState(5);

  const onColumnsCountChange = ({ target: { value } }) => {
    setColumnsCount(value);
  }

  return (
    <div className="App">
      <label className="Label">
        Grid Columns
        <input className="Input" type="number" value={columnsCount} onChange={onColumnsCountChange} min="1"/>
      </label>
      <ImagesList columns={columnsCount}/>
    </div>
  );
}

export default App;
